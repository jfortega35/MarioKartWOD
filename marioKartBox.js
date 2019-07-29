var doing = false;
let boxResult = document.getElementById("boxResult")
var info = true;
function doSpin(){
	if (doing){
        return null;}
	doing = true;
	var numChanges = randomInt(1,4)*8
    var numberitemBox = numChanges + randomInt(1,8)
	var i = 0;
	boxResult.innerHTML = "SPINNING..."
	itemBox = setInterval(spin, 50);
	function spin(){
		i++;
		if (i>=numberitemBox){
            clearInterval(itemBox);
            getPenalty();
			return null;
		}
		itemTile = document.getElementById("itemBox");
		if (itemTile.className=="a8"){
			itemTile.className = "a0";
		}
        itemTile.className = "a"+(parseInt(itemTile.className.substring(1))+1);
	}
}
function getPenalty(){
	var itemBox = document.getElementById("itemBox").className
    switch (itemBox){
        case "a1":
            boxResult.innerHTML = "YOU DO 10 PULL-UPS";
            break;
        case "a2":
            boxResult.innerHTML = "FIRST PLACE, RUN 200 METERS";
            break;
        case "a3":
            boxResult.innerHTML = "YOU DO 10 TOE-TO-BAR";
            break;
        case "a4":
            boxResult.innerHTML = "PERSON TO YOUR LEFT, DO 15 KB SWINGS";
            break;
        case "a5":
            boxResult.innerHTML = "EVERYONE BUT YOU, DO 15 BURPEES";
            break;
        case "a6":
            boxResult.innerHTML = "EVERYONE BUT YOU, DO 15 SIT-UPS";
            break;
        case "a7":
            boxResult.innerHTML = "PICK SOMEONE TO DO 15 KB SWINGS";
            break;
        case "a8":
            boxResult.innerHTML = "EVERYONE BUT YOU, DO 15 BOX JUMPS";
            break;           
    }
	doing = false;
}

function randomInt(min, max){
	return Math.floor((Math.random() * (max-min+1)) + min);
}