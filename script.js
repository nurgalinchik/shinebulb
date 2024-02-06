let counter = parseInt(localStorage.getItem("counter")) || 0;
document.getElementById("counter").innerHTML = counter;
let audioFiles = ["audio/on.mp3", "audio/off.mp3", "audio/happy.mp3", "audio/sussy.mp3"];

for (let i = 0; i < audioFiles.length; i++) {
    let audio = new Audio(audioFiles[i]);
    audio.load();
}

let img = new Image();
img.src = "images/on.svg";
img.load();

function pictureChange() {

    let bulb = document.getElementById("lightbulb");
    let text = document.getElementById("text");
    let counterDisplay = document.getElementById("counter");

    if (bulb.src.endsWith("images/on.svg")) {
        new Audio("audio/on.mp3").play();
        bulb.src = "images/off.svg";
        text.innerHTML = "sad :(";
    } 
    else {
        new Audio("audio/off.mp3").play();
        bulb.src = "images/on.svg";
        text.innerHTML = "happy!";
        counter++;
        localStorage.setItem("counter", counter);
        counterDisplay.innerHTML = counter;
    }
    bulb.classList.toggle("on");
}

function clearProgress() {
    counter = 0;
    document.getElementById("counter").innerHTML = counter;
    localStorage.removeItem("counter");
    new Audio("audio/on.mp3").play();
    bulb.src = "images/off.svg";
    text.innerHTML = "sad :(";
}
