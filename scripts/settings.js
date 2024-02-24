const modeToggle = document.getElementById("modeToggle");
const button = document.getElementById("modeToggle");
let darkMode = localStorage.getItem("darkMode");

const enableDarkMode = () => {
    document.body.classList.add("darkMode");
    localStorage.setItem("darkMode", "enabled");
    button.innerHTML = "on";
}

const disableDarkMode = () => {
    document.body.classList.remove("darkMode");
    localStorage.setItem("darkMode", null);
    button.innerHTML = "off";
}

if (darkMode === "enabled") {
    enableDarkMode();
    button.innerHTML = "on";
}

modeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDarkMode();
    }
    else {
        disableDarkMode();
    }
})