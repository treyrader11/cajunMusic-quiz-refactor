'use strict'

function Quiz(questions) {
	this.score = 0;
	this.questions = questions; //questions is an array that contain 5 instances of the Question constructor
	this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
	return this.questions[this.questionIndex]; 
}

Quiz.prototype.isEnded = function() {
	return this.questions.length === this.questionIndex; 
	console.log("inside isEnded:", quiz.questions.length);
}

Quiz.prototype.guess = function(guess) {
	

	console.log("You chose:", guess);
	//console.log(quiz.getQuestionIndex());
	if(this.getQuestionIndex().correctAnswer(guess)) { //if guess === this.answer
		this.score++;  
	}
	this.questionIndex++;
}

