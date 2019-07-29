var doing = false;
let boxResult = document.getElementById("boxResult")
var info = true;
function doSpin(){
	if (doing){
        return null;
    }
	doing = true;
	var numChanges = randomInt(1,4)*8
    var numberitemBox = numChanges + randomInt(1,8)
	var i1 = 0;
	boxResult.innerHTML = "SPINNING";
	itemBox = setInterval(spin, 50);
	function spin(){
		i1++;
		if (i1>=numberitemBox){
            clearInterval(itemBox);
            getPenalty();
			return null;
		}
		slotTile = document.getElementById("itemBox");
		if (slotTile.className=="a8"){
			slotTile.className = "a0";
		}
		slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)
	}
}
function getPenalty(){
	var itemBox = document.getElementById("itemBox").className
    
    switch (itemBox){
        case "a1":
            boxResult.innerHTML = "You Do 10 Pull-Ups";
            break;
        case "a2":
            boxResult.innerHTML = "First Place, Run 200 meters";
            break;
        case "a3":
            boxResult.innerHTML = "You Do 10 Toe-to-Bar";
            break;
        case "a4":
            boxResult.innerHTML = "Person to Your Left, Do 15 KB Swings";
            break;
        case "a5":
            boxResult.innerHTML = "Everyone but you, Do 15 Burpees";
            break;
        case "a6":
            boxResult.innerHTML = "Everyone but you, Do 15 Sit-Ups";
            break;
        case "a7":
            boxResult.innerHTML = "Pick Someone to do 15 KB Swings";
            break;
        case "a8":
            boxResult.innerHTML = "Everyone but you, Do 15 Box Jumps";
            break;           
    }
	doing = false;
}

function randomInt(min, max){
	return Math.floor((Math.random() * (max-min+1)) + min);
}