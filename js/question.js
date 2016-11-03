'use strict'


function Question(text, choices, answer) {
	this.text = text;
	this.choices = choices;
	this.answer = answer;
}

Question.prototype.correctAnswer = function(choice) {
	return choice === this.answer;
}

//var match = quiz.questions[0].correctAnswer(quiz.questions[0].answer[0]);

//console.log(match)

//if quiz.questions[0].answer[answer] === quiz.question[0].answer[index]