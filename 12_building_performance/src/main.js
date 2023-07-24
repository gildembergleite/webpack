const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: ["Berlin", "London", "Paris", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    question: "Which planet is closest to the Sun?",
    answers: ["Mars", "Venus", "Mercury", "Jupiter"],
    correctAnswer: "Mercury"
  },
  {
    question: "What is the largest mammal in the world?",
    answers: ["Elephant", "Blue Whale", "Giraffe", "Lion"],
    correctAnswer: "Blue Whale"
  }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
  const questionContainer = document.getElementById('question-container');
  const buttonsContainer = document.getElementById('buttons-container');

  questionContainer.textContent = quizQuestions[currentQuestionIndex].question;
  buttonsContainer.innerHTML = '';

  quizQuestions[currentQuestionIndex].answers.forEach(answer => {
    const button = document.createElement('button');
    button.textContent = answer;
    button.addEventListener('click', () => checkAnswer(answer));
    buttonsContainer.appendChild(button);
  });
}

function checkAnswer(selectedAnswer) {
  const correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;

  if (selectedAnswer === correctAnswer) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    displayQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const questionContainer = document.getElementById('question-container');
  const buttonsContainer = document.getElementById('buttons-container');

  questionContainer.textContent = `Quiz completed! Your score: ${score} out of ${quizQuestions.length}`;
  buttonsContainer.innerHTML = '';
}

displayQuestion();
