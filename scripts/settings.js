const modeToggle = document.getElementById("modeToggle");
let darkMode = localStorage.getItem("darkMode");

const enableDarkMode = () => {
    document.body.classList.add("darkMode");
    localStorage.setItem("darkMode", "enabled");
    modeToggle.innerHTML = "on";
}

const disableDarkMode = () => {
    document.body.classList.remove("darkMode");
    localStorage.setItem("darkMode", null);
    modeToggle.innerHTML = "off";
}

if (darkMode === "enabled") {
    enableDarkMode();
    modeToggle.innerHTML = "on";
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