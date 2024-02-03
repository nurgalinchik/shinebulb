var counter = 0;

var audioFiles = ["audio/on.mp3", "audio/off.mp3"];

for (var i = 0; i < audioFiles.length; i++) {
    var audio = new Audio(audioFiles[i]);
    audio.load();
}

var img = new Image();
img.src = "images/on.svg";
img.load();

function pictureChange() {


    var bulb = document.getElementById("lightbulb");
    var text = document.getElementById("text");
    var counterDisplay = document.getElementById("counter");

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
