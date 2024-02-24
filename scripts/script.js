let counter = parseInt(localStorage.getItem("counter")) || 0;
let bulb = document.getElementById("lightbulb");
let audioFiles = ["/audio/on.mp3", "/audio/off.mp3"];

document.getElementById("counter").innerHTML = counter;
bulb.classList.toggle("off");

for (audio of audioFiles) {
    new Audio(audio).load();
}

let img = new Image();
img.src = "/images/on.svg";

function pictureChange() {
    let text = document.getElementById("text");
    let counterDisplay = document.getElementById("counter");
    if (bulb.src.endsWith("/images/on.svg")) {
        new Audio("/audio/on.mp3").play();
        bulb.src = "/images/off.svg";
        text.innerHTML = "sad :(";
    }
    else {
        new Audio("/audio/off.mp3").play();
        bulb.src = "/images/on.svg";
        text.innerHTML = "happy!";
        counter++;
        localStorage.setItem("counter", counter);
        counterDisplay.innerHTML = counter;
    }
    bulb.classList.toggle("on");
}

function resetCounter() {
    counter = 0;
    document.getElementById("counter").innerHTML = counter;
    localStorage.removeItem("counter");
    new Audio("/audio/off.mp3").play();
    if (bulb.src.endsWith("/images/on.svg")) {
        bulb.classList.toggle("on");
    }
    bulb.src = "/images/off.svg";
    text.innerHTML = "sad :(";
}

function checker() {
    let choice = confirm(`Are you sure you want to reset the counter?`)
    if (choice) {
        resetCounter()
    }
}
