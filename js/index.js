

var startBtn = document.getElementById('btn-start');
//an array of 5 instances of the Question constructor function. 
var questions = [
	new Question('Which two Cajun artists are credited to have been the first to record the Cajun standard, "Allons a Lafayette?"', ["Dennis Mcgee and Sadie Courville", "Canray Fontenot and Bois Sec Ardoin", "Joe Falcon and Cleoma Breaux", "Dewey and Rodney Balfa"], "Joe Falcon and Cleoma Breaux"),
	new Question('In which city is fiddler Dennis Mcgee buried?', ['Mamou', 'Lafayette', 'Opelousas', 'Eunice'], 'Eunice'),
	new Question('Which Cajun musician wrote the Cajun standard, "Two-step dAmedee"?', ['Marc Savoy', 'Wayne Toups', 'Steve Reily', 'Tom Waits'], 'Marc Savoy'),
	new Question('What is the difference between a fiddle and a violin?', ['A fiddle you can play Cajun music with and a violin you can play Cajun music too.', 'A fiddle is made of wood and a violin is made of hemicellulose', 'A fiddle costs two dollars and a violin costs 3.', "There isn't any difference"], "There isn't any Difference"),
	new Question("Last but not least: How many fingers did Cajun accordion player Silson Wavoy have before he started playing the accordion?", ["5 fingers", "7 fingers", "8 fingers", "All of the above"], "All of the above")
];
var populateCounter = 0;

var quiz = new Quiz(questions);


var startBtn = document.getElementById('btn-start');

startBtn.onclick = function() {
	populate();
	
}



function populate() {
	populateCounter++;

	if(quiz.isEnded()) { 
		showScores();
	}
	else {
	 	//show questions
	 	var quizQuestion = document.getElementById('question');
	 	quizQuestion.innerHTML = quiz.getQuestionIndex().text;
	 	console.log(populateCounter, quiz.getQuestionIndex().text); 
									//quiz.questions[0].text
	}
	 	//show choices
	var choices = quiz.getQuestionIndex().choices;
	
	console.log(populateCounter, choices);

//loop for iterating thru choices
	for(var index = 0; index < choices.length; index++) { //this just says repeat 4 times
	 	var eachChoice = choices[index];
	 	var quizChoice = document.getElementById('choice' + index);
	 	quizChoice.innerHTML = choices[index]; //=== e.g., quiz.questions.choices[0]/writes out the options to these ids
	 	makeGuess("btn" + index, eachChoice); //each loop calls this function with these arguments
	}
	showProgress(); // *after* it loops, call this function
}

function showProgress() {
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}


function makeGuess(id, guess) { // #btn[index], questions.choices[index]

//this guess function gets called 4 times (loop) and will attach an event handler onto each choice
	var button = document.getElementById(id); //#btn[index]
	button.onclick = function() { //when you click on each btn, call guess() method populate() function
		quiz.guess(guess);
		populate();
	}
}

function showScores() {
	var gameOverHtml = '<h1>Results</h1>';
	var restartBtn = '<button id="restart">Restart Quiz</button>';
	gameOverHtml += '<h2 id="scores">Your score: ' + quiz.score + '</h2><br/>' + restartBtn;
	var element = document.getElementById('quiz');
	element.innerHTML = gameOverHtml;
	
	restartBtn = document.getElementById('restart');
	restartBtn.onclick = function() {
		restartQuiz();
	}
}

function restartQuiz() {
	$('.buttons').empty();
	$('footer').empty();
	$('#question').empty();
	quiz.questionIndex = 0;
	quiz.score = 0;
}



//var match = quiz.questions[0].correctAnswer(quiz.questions[0].answer[4]);
//correctAnswer just checks to see if there's a match
//console.log(match)