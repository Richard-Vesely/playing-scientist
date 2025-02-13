import { systems } from './systems.js';

document.addEventListener("DOMContentLoaded", () => {
  // --- Populate the System Dropdown ---
  const systemSelect = document.getElementById('systemSelect');
  for (let key in systems) {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = key;
    systemSelect.appendChild(option);
  }
  systemSelect.value = Object.keys(systems)[0];

  // --- Populate the Theme Dropdown dynamically by scanning CSS ---
  const themeSelect = document.getElementById("themeSelect");
  const themeRegex = /\.theme-([a-z0-9_-]+)/i;
  const themesFound = new Set();
  for (const sheet of document.styleSheets) {
    try {
      for (const rule of sheet.cssRules) {
        if (rule.selectorText) {
          const match = rule.selectorText.match(themeRegex);
          if (match) {
            themesFound.add(match[1]);
          }
        }
      }
    } catch (e) {
      console.warn("Could not access stylesheet rules: ", e);
    }
  }
  themesFound.forEach(theme => {
    const option = document.createElement("option");
    option.value = theme;
    option.textContent = theme.charAt(0).toUpperCase() + theme.slice(1);
    themeSelect.appendChild(option);
  });
  themeSelect.value = "alien"; // default theme
  document.body.className = "theme-" + themeSelect.value;
  themeSelect.addEventListener("change", function() {
    const selectedTheme = themeSelect.value;
    document.body.className = "theme-" + selectedTheme;
  });

  // --- Mission Control Functionality ---
  const missionDisplay = document.getElementById('missionDisplay');
  const display = document.getElementById('display');
  const terminalContainer = document.getElementById('terminalContainer');
  const progressBar = document.getElementById('progressBar');

  let currentSystemKey = systemSelect.value;
  let currentMissionTarget = "";
  let missionCompleted = false;
  let successfulMissions = 0;

  function createInput() {
    terminalContainer.innerHTML = "";
    const inputElem = document.createElement('input');
    inputElem.type = "text";
    inputElem.value = "";
    terminalContainer.appendChild(inputElem);
    inputElem.focus();
    inputElem.addEventListener('input', onTerminalInput);
  }

  function updateDisplay(result) {
    if (result === "WRONG_ARGUMENT") {
      display.textContent = ".#/-_\n( T_T )\n.#/-_";
    } else {
      display.textContent = result;
    }
  }

  function updateProgressBar() {
    let progressPercent = (successfulMissions / 10) * 100;
    progressBar.style.width = progressPercent + "%";
  }

  function resetProgressBar() {
    successfulMissions = 0;
    updateProgressBar();
  }

  function onTerminalInput() {
    const inputElem = terminalContainer.querySelector('input');
    const inputVal = inputElem.value;
    const currentSystem = systems[currentSystemKey];
    const result = currentSystem.process([inputVal]);
    updateDisplay(result);
  
    if (
      inputVal.trim() !== "" &&
      result === currentMissionTarget &&
      result !== "WRONG_ARGUMENT" &&
      !missionCompleted
    ) {
      missionCompleted = true;
      successfulMissions++;
      updateProgressBar();
      if (successfulMissions >= 10) {
        display.textContent = "Congratulations!";
        setTimeout(() => {
          resetProgressBar();
          updateSystem();
        }, 250);
      } else {
        setTimeout(() => {
          updateSystem();
        }, 250);
      }
    }
  }

  function updateSystem() {
    currentSystemKey = systemSelect.value;
    createInput();
    const currentSystem = systems[currentSystemKey];
    currentMissionTarget = currentSystem.generateMission();
    missionDisplay.textContent = currentMissionTarget;
    display.textContent = "";
    missionCompleted = false;
    const inputElem = terminalContainer.querySelector('input');
    if (inputElem) inputElem.focus();
  }

  systemSelect.addEventListener('change', () => {
    updateSystem();
    resetProgressBar();
  });

  // Start the first mission
  updateSystem();
});
