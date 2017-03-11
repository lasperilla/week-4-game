$(document).ready(function() {

var wins = 0;
var losses = 0;
var charactersArr = [luke, obiwan, leia, vader];
var easyEnemiesArr = [trooper, scout, sandperson, babyrancor]
var bossEnemiesArr = [boba, sidious, rancor]
var fieldEnemiesArr = [];

//characters
var luke = {
	name: "Luke Skywalker",
	hp: "1000"
	atk: "10"
	skill: "none"
}

var obiwan = {
	name: "Obi-wan Kenobi",
	hp: "1200"
	atk: "8"
	skill: "soresustylemastery"
}

var leia = {
	name: "Leia Organa",
	hp: "800"
	atk: "6"
	skill: "range"
}

var vader = {
	name: "Darth Vader",
	hp: "1000"
	atk: "10"
	skill: "djemsostylemastery"
}

//easy enemies
var trooper = {
	name: "Stormtrooper",
	hp: "100"
	atk: "0"
	type: "ranged"
}

var scout = {
	name: "Scouttrooper",
	hp: "200"
	atk: "50"
	type: "ranged"
}

var sandperson = {
	name: "Tusken Raider",
	hp: "150"
	atk: "50"
	type: "melee"
}

var babyrancor = {
	name: "Baby Rancor",
	hp: "300"
	atk: "20"
	type: "melee"
}

//boss enemies 
var boba = {
	name: "Boba Fett",
	hp: "700"
	atk: "150"
	type: "ranged"
}

var sidious = {
	name: "Darth Sidious",
	hp: "1000"
	atk: "100"
	type: "melee"
}

var rancor = {
	name: "Rancor",
	hp: "2000"
	atk: "50"
	type: "melee"
}




}); //end of document.ready