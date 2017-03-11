// JavaScript function that wraps everything
$(document).ready(function() {

	var wins = 0;
	var losses = 0;
	var totalScore = 0;
	var targetScore;
	var crystalValues = {
		green: 0,
		red: 0,
		blue: 0,
		purple: 0
	}

	//get random integer within range, inclusive
	function getRandomIntInclusive(min, max) {
	  min = Math.ceil(min);
	  max = Math.floor(max);
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function setTarget() {
		targetScore = getRandomIntInclusive(19,120);
		console.log("target score: "+targetScore);
	}

	function setCrystalValues() {
		crystalValues.green = getRandomIntInclusive(1,12);
		crystalValues.red = getRandomIntInclusive(1,12);
		crystalValues.blue = getRandomIntInclusive(1,12);
		crystalValues.purple = getRandomIntInclusive(1,12);
		console.log("green "+crystalValues.green);
		console.log("red "+crystalValues.red);
		console.log("blue "+crystalValues.blue);
		console.log("purple "+crystalValues.purple);
		$(".greencrystal").attr("value", crystalValues.green);
		$(".redcrystal").attr("value", crystalValues.red);
		$(".bluecrystal").attr("value", crystalValues.blue);
		$(".purplecrystal").attr("value", crystalValues.purple);
	}

	function reset() {
		setTarget();
		setCrystalValues();
		//push target score into designated div
		$("#targetScore").html(targetScore);
	}

	//push current total score into designated div
	function displayTotalScore() {
		$("#yourscore").html(totalScore);
	}

	reset();

	$(".crystalimg").on("click", function() {
		totalScore += parseInt($(this).attr("value"));
		console.log("this value "+$(this).attr("value"));
		console.log(totalScore) 
		displayTotalScore();
	});

}); //end of document.ready