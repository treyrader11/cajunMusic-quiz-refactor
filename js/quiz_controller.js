'use strict'

function Quiz(questions) {
	this.score = 0;
	this.questions = questions; //questions is an array that contain 5 instances of the Question constructor
	this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
	return this.questions[this.questionIndex]; // == quiz.questions[0]
}

Quiz.prototype.getCorrectAnswer = function() {
	var questionIndex = quiz.getQuestionIndex();
	var currentCorrectAnswer = questionIndex.answer;
	return currentCorrectAnswer;
}

Quiz.prototype.isEnded = function() {
	return this.questions.length === this.questionIndex; 
	console.log("inside isEnded:", quiz.questions.length);
}

Quiz.prototype.guess = function(guess) {
	
	console.log("You chose", '"'+guess+'".');
	var currentAnswer = quiz.getCorrectAnswer();
	var element = document.getElementById('answers');
	
	if(this.getQuestionIndex().correctAnswer(guess)) { //if guess === this.answer
		this.score++;
		console.log("this is the correct answer!", "you have " +this.score+ " correct.")  
	}
	else {
		console.log("but the correct answer is", '"'+currentAnswer+'"');
	}
	this.questionIndex++;

}

