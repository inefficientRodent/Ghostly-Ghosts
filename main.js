//A NOTE TO FUTURE ME. THIS IS FUCKING IMPORTANT.
//DON'T BE A FUCKIN DUNDER HEAD AND TRY AND CONSTANTLY ROUND VALUES
//ONLY ROUND THE VALUES DURING THE DISPLAY PART OF THE WHOLE SHTICK
//OR ELSE YOU'LL JUST BE WASTING YOUR FUCKING TIME
var gameData = {
	minorSpirit: 0,
	mSpiritPerClick: 1,
	vacuumUpgradeCost: 10,
	vacuumLevel: 0,
	vacuumPerSecond: 0,
	pricePerMinorSpirit: 0.5,
	
	apparition: 0,
	
	
	ghost: 0,
	
	cash: 0,
	
		
	//FOLLOWING VARIABLES ARE FOR "ALL TIME" STAT
	ATcash: 0,
	ATminorspirit: 0,
	ATapparition: 0,
	ATghost: 0
}

//Function to open options menu 
function options() {
	document.getElementById("optionsMenBG").style.display = "block";
	document.getElementById("optionsMenFG").style.display = "block";
}
function closeOpts() {
	document.getElementById("optionsMenBG").style.display = "none";
	document.getElementById("optionsMenFG").style.display = "none";
}

function smallSpirit() {
	gameData.minorSpirit = gameData.minorSpirit + gameData.mSpiritPerClick
	//All time minor spirits
	gameData.ATminorspirit = gameData.ATminorspirit + gameData.mSpiritPerClick
	document.getElementById("totalMinor").innerHTML = "Total wailing minor spirits: " + (Math.round(gameData.minorSpirit * 100) / 100)
}

function sellMinorSpiritx1() {
	if (gameData.minorSpirit >= 1) {
		gameData.minorSpirit = gameData.minorSpirit - 1
		gameData.cash = gameData.cash + gameData.pricePerMinorSpirit
		document.getElementById("totalMinor").innerHTML = "Total wailing minor spirits: " + (Math.round(gameData.minorSpirit * 100) / 100)
		document.getElementById("totalCash").innerHTML = " You've got: $" + gameData.cash
	}
}

function sellMinorSpiritx10() {
	if (gameData.minorSpirit >= 10) {
		gameData.minorSpirit = gameData.minorSpirit - 10
		gameData.cash = gameData.cash + (gameData.pricePerMinorSpirit * 10)
		document.getElementById("totalMinor").innerHTML = "Total wailing minor spirits: " + (Math.round(gameData.minorSpirit * 100) / 100)
		document.getElementById("totalCash").innerHTML = " You've got: $" + gameData.cash
	}
}

function upgradeVacuum() {
	if (gameData.minorSpirit >= gameData.vacuumUpgradeCost) {
		//Calculation for taking away cost of upgrade from minorSpirit bank
		gameData.minorSpirit = gameData.minorSpirit - gameData.vacuumUpgradeCost
		
		//Calc for getting new minor spirit per click
		gameData.mSpiritPerClick = gameData.mSpiritPerClick + 0.1
		
		//Calc for increasing the cost of vacuum upgrade
		gameData.vacuumUpgradeCost = gameData.vacuumUpgradeCost * 1.2
		
		//Increment Vacuum level
		gameData.vacuumLevel += 1
		
		//Updating elements
		document.getElementById("totalMinor").innerHTML = "Total wailing minor spirits: " + (Math.round(gameData.minorSpirit * 100) / 100)
		document.getElementById("minorSpiritPerClickUpgrade").innerHTML = "Use some minor spirit to upgrade your Polturgust 3000 Cost: " + (Math.round(gameData.vacuumUpgradeCost * 100) / 100) + " Minor Spirits"
		document.getElementById("vacuumLevel").innerHTML = "Current level: " + gameData.vacuumLevel
		
	}
}


//HERE'S WHERE THE CODE GETS KINDA SHIFTY AND I DISLIKE IT
// PAST ME LEFT A REAL GOOD MESSAGE HERE. LOVE, FUTURE-PAST MAX.
function firstUpgrade() {
	if (gameData.cash >= 25) {
		document.getElementById("shpFirst").disabled = true;
		gameData.cash = gameData.cash - 25;
		document.getElementById("totalCash").innerHTML = " You've got: $" + gameData.cash
		gameData.vacuumPerSecond = 0.5
	}
}


//Technical game bullshit

//This first one runs every second, good for per second stuff. Duh.
var mainGameLoop = window.setInterval(function() {
	//IF ALL TIME MINOR SPIRIT IS ABOVE 10, THEN ELEMENT WILL BE SHOWN, TADAA.
	if (gameData.ATminorspirit >= 10) {
		document.getElementById("sellMoreMinorSpirit").style.display = "inline-block";
	}
	//REPEATING CALC FOR VACUUM UPGRADE
	if (gameData.vacuumPerSecond > 0 && gameData.vacuumLevel > 0 && gameData.cash >0) {
		gameData.minorSpirit = gameData.minorSpirit + (gameData.vacuumPerSecond * gameData.vacuumLevel);
		gameData.ATminorspirit = gameData.ATminorspirit + ((gameData.vacuumPerSecond * gameData.vacuumLevel)-1);
		gameData.cash = (gameData.cash - 0.25)
	}
	
	
}, 1000)

var updateLoop = window.setInterval(function() {
	document.getElementById("totalMinor").innerHTML = "Total wailing minor spirits: " + (Math.round(gameData.minorSpirit * 100) / 100)
	document.getElementById("totalCash").innerHTML = " You've got: $" + gameData.cash
}, 500)

var saveGameLoop = window.setInterval(function() {
	localStorage.setItem('ghostlyGhoulsSave', JSON.stringify(gameData))
}, 300000)

function manualSave() {
	localStorage.setItem('ghostlyGhoulsSave', JSON.stringify(gameData))
}

function nevermind() {
	document.getElementById('forREAL').style.display = "none";
}

function deleteSave() {
	document.getElementById('forREAL').style.display = "block";
}

function deleteSaveForREAL() {
	localStorage.removeItem('ghostlyGhoulsSave')
	//Renewing variables to base numbers and also the displays. There has GOT to be an easier way to do this but oh fucking well.
	gameData.minorSpirit= 0,
	gameData.mSpiritPerClick= 1,
	gameData.vacuumUpgradeCost= 10,
	gameData.vacuumLevel= 0,
	gameData.pricePerMinorSpirit= 0.5,
	
	gameData.apparition= 0,
	
	gameData.ghost= 0,
	
	gameData.cash= 0,
		
	//FOLLOWING VARIABLES ARE FOR "ALL TIME" STAT
	gameData.ATcash= 0,
	gameData.ATminorspirit= 0,
	gameData.ATapparition= 0,
	gameData.ATghost= 0
	
	
	//Display resets
	document.getElementById("shpFirst").disabled = false;
	document.getElementById("sellMoreMinorSpirit").style.display = "none";
	document.getElementById("totalCash").innerHTML = " You've got: $" + gameData.cash
	document.getElementById("totalMinor").innerHTML = "Total wailing minor spirits: " + (Math.round(gameData.minorSpirit * 100) / 100)
	document.getElementById("minorSpiritPerClickUpgrade").innerHTML = "Use some minor spirit to upgrade your Polturgust 3000 Cost: " + (Math.round(gameData.vacuumUpgradeCost * 100) / 100) + " Minor Spirits"
	document.getElementById("vacuumLevel").innerHTML = "Current level: " + gameData.vacuumLevel
}

var savegame = JSON.parse(localStorage.getItem("ghostlyGhoulsSave"))
if (savegame !== null) {
	gameData = savegame
	
	//Ensuring the game correctly loads all variables into the page immediately.
	if (gameData.ATminorspirit >= 10) {
		document.getElementById("sellMoreMinorSpirit").style.display = "inline-block";
	}
	document.getElementById("shpFirst").disabled = false;
	document.getElementById("sellMoreMinorSpirit").style.display = "none";
	document.getElementById("totalMinor").innerHTML = "Total wailing minor spirits: " + (Math.round(gameData.minorSpirit * 100) / 100)
	document.getElementById("minorSpiritPerClickUpgrade").innerHTML = "Use some minor spirit to upgrade your Polturgust 3000 Cost: " + (Math.round(gameData.vacuumUpgradeCost * 100) / 100) + " Minor Spirits"
	document.getElementById("vacuumLevel").innerHTML = "Current level: " + gameData.vacuumLevel
	document.getElementById("totalCash").innerHTML = " You've got: $" + gameData.cash
}







//DEBUG COMMANDS STRICTLY FOR DEVELOPMENT PURPOSES. USE AT OWN RISK.
function devAV() {
	console.log(gameData)
}

function devSV(val) {
	gameData.cash = val
	gameData.minorSpirit = val
	gameData.apparition = val
	gameData.ghost = val
	document.getElementById("totalMinor").innerHTML = "Total wailing minor spirits: " + (Math.round(gameData.minorSpirit * 100) / 100)
	document.getElementById("totalCash").innerHTML = " You've got: $" + gameData.cash
}