var doing = false;
let boxResult = document.getElementById("boxResult")
var info = true;
var starAudio = new sound("audio/starPower.mp3");
var lightningAudio = new sound("audio/lightning.mp3");

function doSpin() {
    if (doing) {
        return null;
    }
    doing = true;
    var numChanges = randomInt(1, 4) * 8
    var numberitemBox = numChanges + randomInt(1, 8)
    var i = 0;
    boxResult.innerHTML = "..."
    itemBox = setInterval(spin, 50);
    function spin() {
        i++;
        if (i >= numberitemBox) {
            clearInterval(itemBox);
            getPenalty();
            return null;
        }
        itemTile = document.getElementById("itemBox");
        if (itemTile.className == "a8") {
            itemTile.className = "a0";
        }
        itemTile.className = "a" + (parseInt(itemTile.className.substring(1)) + 1);
    }
}
function getPenalty() {
    var itemBox = document.getElementById("itemBox").className
    switch (itemBox) {
        case "a1":
            //banana
            boxResult.innerHTML = "YOU DO 5 SNATCHES";
            //
            starAudio.stop();
            break;
        case "a2":
            //blueShell
            boxResult.innerHTML = "FIRST PLACE, PULL SLED 50 METERS";
            //
            starAudio.stop();
            break;
        case "a3":
            //bobomb
            boxResult.innerHTML = "YOU DO 5 CLEAN AND JERKS";
            //
            starAudio.stop();
            break;
        case "a4":
            //greenShell
            boxResult.innerHTML = "PICK SOMEONE TO DO 5 FRONT SQUATS";
            starAudio.stop();
            //
            break;
        case "a5":
            //lightning
            boxResult.innerHTML = "EVERYONE BUT YOU, DO 5 DEADLIFTS";
            starAudio.stop();
            lightningAudio.play();
            //
            break;
        case "a6":
            //mushroom
            boxResult.innerHTML = "EVERYONE BUT YOU, DO 5 PUSH PRESSES";
            starAudio.stop();
            //
            break;
        case "a7":
            //redShell
            boxResult.innerHTML = "PICK SOMEONE TO DO 5 OVERHEAD SQUATS";
            starAudio.stop();
            //
            break;
        case "a8":
            //star
            boxResult.innerHTML = "EVERYONE BUT YOU, DO 5 THRUSTERS";
            starAudio.play();
            //
            break;
    }
    doing = false;
}

function randomInt(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}