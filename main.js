var gameData = {
	minorSpirit: 0,
	mSpiritPerClick: 1,
	vacuumUpgradeCost: 10,
	
	
	apparition: 0,
	
	
	ghost: 0,
	
	cash: 0
}

function smallSpirit() {
	gameData.minorSpirit += gameData.mSpiritPerClick
	gameData.ghostAmount = gameData.minorSpirit + gameData.apparition + gameData.ghost 
	document.getElementById("totalMinor").innerHTML = "Total wailing minor spirits: " + gameData.minorSpirit
}
function sellMinorSpiritx1() {
	
}

function buyVacuum() {
	if (gameData.minorSpirit >= gameData.vacuumUpgradeCost) {
		gameData.minorSpirit -= gameData.vacuumUpgradeCost
		gameData.mSpiritPerClick = Math.round(gameData.mSpiritPerClick + 1)
		gameData.vacuumUpgradeCost = Math.round(gameData.vacuumUpgradeCost * 1.25)
		document.getElementById("totalMinor").innerHTML = "Total wailing minor spirits: " + gameData.minorSpirit
		document.getElementById("minorSpiritPerClickUpgrade").innerHTML = "Upgrade ghost catching equipment Cost: " + gameData.vacuumUpgradeCost + " Minor Spirits"
	}
}

var mainGameLoop = window.setInterval(function() {
	pass
}, 1000)

var saveGameLoop = window.setInterval(function() {
	localStorage.setItem('ghostlyGhouls', JSON.stringify(gameData))
}, 15000)