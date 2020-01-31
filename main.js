//A NOTE TO FUTURE ME. THIS IS FUCKING IMPORTANT.
//DON'T BE A FUCKIN DUNDER HEAD AND TRY AND CONSTANTLY ROUND VALUES
//ONLY ROUND THE VALUES DURING THE DISPLAY PART OF THE WHOLE SHTICK
//OR ELSE YOU'LL JUST BE WASTING YOUR FUCKING TIME

var gameData = {
	minorSpirit: 0,
	mSpiritPerClick: 1,
	vacuumUpgradeCost: 10,
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


function smallSpirit() {
	gameData.minorSpirit = gameData.minorSpirit + gameData.mSpiritPerClick
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
		gameData.mSpiritPerClick = gameData.mSpiritPerClick + 0.5
		
		//Calc for increasing the cost of vacuum upgrade
		gameData.vacuumUpgradeCost = gameData.vacuumUpgradeCost * 1.25
		
		
		document.getElementById("totalMinor").innerHTML = "Total wailing minor spirits: " + (Math.round(gameData.minorSpirit * 100) / 100)
		document.getElementById("minorSpiritPerClickUpgrade").innerHTML = "Use some minor spirit to upgrade your Polturgust 3000 Cost: " + (Math.round(gameData.vacuumUpgradeCost * 100) / 100) + " Minor Spirits"
	}
}


//HERE'S WHERE THE CODE GETS KINDA SHIFTY AND I DISLIKE IT
//PS. FUTURE ME.
// SERIOUSLY
// PS FUCKING FUTURE ME
// COME BACK AND WORK ON THIS.
// SERIOUS FUCKING LY.
function firstUpgrade() {
	if (gameData.cash >= 25) {
		document.getElementById("shpFirst").disabled = true;
	}
}



var mainGameLoop = window.setInterval(function() {
	//IF MINOR SPIRIT IS ABOVE 10, THEN ELEMENT WILL BE SHOWN, TADAA.
	if (gameData.minorSpirit >= 10) {
		document.getElementById("sellMoreMinorSpirit").style.display = "inline-block";
	}
	
	
	
}, 1000)

var saveGameLoop = window.setInterval(function() {
	localStorage.setItem('ghostlyGhouls', JSON.stringify(gameData))
}, 15000)









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