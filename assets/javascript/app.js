$(document).ready(function() {

var questions = [
    {
		question: "1. Shareholder wealth in a firm is represented by:",
		answers: {
			a: "the number of people employed in the firm.",
			b: "the book value of the firm's assets less the book value of its liabilities.",
            c: "the amount of salary paid to its employees.",
            d: "the market price per share of the firm's common stock."
		},
		correctAnswer: 'd'
    },
    
    {
        question: "2. The long-run objective of financial management is to:",
		answers: {
			a: "maximize earnings per share.",
			b: "maximize the value of the firm's common stock.",
            c: "maximize return on investment.",
            d: "maximize market share."
		},
		correctAnswer: 'b'
    },

    {
        question: "3. What are the earnings per share (EPS) for a company that earned $100,000 last year in after-tax profits, has 200,000 common shares outstanding and $1.2 million in retained earning at the year end?",
		answers: {
			a: "$100,000",
			b: "$6.00",
            c: "$0.50",
            d: "$6.50"
		},
		correctAnswer: 'c'
    },

    {
        question: "4. A(n) _______ would be an example of a principal, while a(n) ______ would be an example of an agent.",
		answers: {
			a: "shareholder; manager",
			b: "manager; owner",
            c: "accountant; bondholder",
            d: "shareholder; bondholder"
		},
		correctAnswer: 'a'
    },

    {
        question: "5. The market price of a share of common stock is determined by:",
		answers: {
			a: "the board of directors of the firm.",
			b: "the stock exchange on which the stock is listed",
            c: "the president of the company.",
            d: "individuals buying and selling the stock."
		},
		correctAnswer: 'd'
    },
    
    {
        question: "6. The focal point of financial management in a firm is:",
		answers: {
			a: "the number and types of products or services provided by the firm.",
			b: "the minimization of the amount of taxes paid by the firm.",
            c: "the creation of value for shareholders.",
            d: "the dollars profits earned by the firm."
		},
		correctAnswer: 'c'
    },

    {
        question: "7. The decision function of financial management can be broken down into the _______ decisions.",
		answers: {
			a: "financing and investment",
			b: "investment, financing, and asset management",
            c: "financing and dividend",
            d: "capital budgeting, cash management, and credit management"
		},
		correctAnswer: 'b'
    },

    {
        question: "8. In the US, the _______ has been given the power to adopt auditing, quality control, ethics, and disclosure standards for public companies and their auditors as well as investigate and discipline those involved.",
		answers: {
			a: "American Institute of Certified Public Accountants (AICPA)",
			b: "Financial Accounting Standards Board (FASB)",
            c: "Public Company Accounting Oversight Board (PCAOB)",
            d: "Securities and Exchange Commission (SEC)"
		},
		correctAnswer: 'c'
    },

    {
        question: "9. A company's ________ is (are) potentially the most effective instrument of good corporate governance.",
		answers: {
			a: "common stock shareholders",
			b: "board of directors",
            c: "top executive officers",
            d: "managers"
		},
		correctAnswer: 'b'
    },

    {
        question: "10. The Sarbanes-Oxley Act of 2002 (SOX) was largely a response to:",
		answers: {
			a: "a series of corporate scandals involving Enron, WorldCom, Global Crossing, Tyco and numerous others.",
			b: "a dramatic rise in the US trade deficit.",
            c: "charges of excessive compensation to top corporate executives.",
            d: "rising complaints by investors and security analysts over the financial accounting for stock options."
		},
		correctAnswer: 'a'
    }
];

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var counter = 60;

var timer;

var startButton = document.getElementById("start");
var quizContainer = document.getElementById("quiz");
var submitButton = document.getElementById("submit");

$("#submit").hide();

function countdown() {
	counter--;
	$("#timer").html("<h1> Time remaining: " + counter + "</h1>");
	if (counter === 0) {
	showResults(questions, quizContainer);
	}
	else {
	
	}
}

function showQuestions (questions, quizContainer) {
	
	//Creo una variable dónde guardar las respuestas
	var output = [];
	var answers;

	//Para cada pregunta guardo la respuesta
	for(var i=0; i<questions.length; i++){
		answers = [];

		for(letter in questions[i].answers){

			// agrego al html un radio button para cada answer
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>' + '<br>'
			);
		}	
		// agrego question y answers al output
		output.push(
			'<br>' + '<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);

	}
	// Mandarlo a html
	quizContainer.innerHTML = output.join("");
}

function showResults(questions, quizContainer){

	var answerContainers = quizContainer.querySelectorAll('.answers');
	var userAnswer = '';

	for(var i=0; i<questions.length; i++){

		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked') || {}).value;
		console.log(userAnswer);

		if(userAnswer===questions[i].correctAnswer){
			correct++;
		}

		else if (typeof userAnswer=== "undefined") {
			unanswered++;
		}
		
		else{
			incorrect++;
		}		
	}
	results();
}

function results() {

    clearInterval(timer);

	$("#timer").remove();
	
	// show number of correct/incorrect answers out of total
    $("#results").html("<h2>All Done!</h2>");
    $("#results").append("<p> Correct answers: " + correct + ' out of ' + questions.length + "</p>");  
	$("#results").append("<p> Incorrect answers: " + incorrect + ' out of ' + questions.length + "</p>");
	$("#results").append("<p> Unanswered: " + unanswered + "</p>"); 
}

//Click events
startButton.onclick = function(){
	var timer = setInterval(countdown, 1000);
	showQuestions(questions, quizContainer);
	$("#start").remove();
	$("#submit").show();
}

submitButton.onclick = function(){
	showResults(questions, quizContainer);
}


});