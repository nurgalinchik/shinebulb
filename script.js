let counter = 0;
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
        text.innerHTML = "turn on the lightbulb to make it happy";
    } 
    else {
        new Audio("audio/off.mp3").play();
        bulb.src = "images/on.svg";
        text.innerHTML = "the lightbulb is happy!";
        counter++;
        counterDisplay.innerHTML = counter;
    }
    bulb.classList.toggle("on");
}
