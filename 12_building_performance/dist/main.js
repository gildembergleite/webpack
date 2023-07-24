/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_12_building_performance"] = self["webpackChunk_12_building_performance"] || []).push([["main"],{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (() => {

eval("const quizQuestions = [{\n  question: \"What is the capital of France?\",\n  answers: [\"Berlin\", \"London\", \"Paris\", \"Madrid\"],\n  correctAnswer: \"Paris\"\n}, {\n  question: \"Which planet is closest to the Sun?\",\n  answers: [\"Mars\", \"Venus\", \"Mercury\", \"Jupiter\"],\n  correctAnswer: \"Mercury\"\n}, {\n  question: \"What is the largest mammal in the world?\",\n  answers: [\"Elephant\", \"Blue Whale\", \"Giraffe\", \"Lion\"],\n  correctAnswer: \"Blue Whale\"\n}];\nlet currentQuestionIndex = 0;\nlet score = 0;\nfunction displayQuestion() {\n  const questionContainer = document.getElementById('question-container');\n  const buttonsContainer = document.getElementById('buttons-container');\n  questionContainer.textContent = quizQuestions[currentQuestionIndex].question;\n  buttonsContainer.innerHTML = '';\n  quizQuestions[currentQuestionIndex].answers.forEach(answer => {\n    const button = document.createElement('button');\n    button.textContent = answer;\n    button.addEventListener('click', () => checkAnswer(answer));\n    buttonsContainer.appendChild(button);\n  });\n}\nfunction checkAnswer(selectedAnswer) {\n  const correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;\n  if (selectedAnswer === correctAnswer) {\n    score++;\n  }\n  currentQuestionIndex++;\n  if (currentQuestionIndex < quizQuestions.length) {\n    displayQuestion();\n  } else {\n    showResult();\n  }\n}\nfunction showResult() {\n  const questionContainer = document.getElementById('question-container');\n  const buttonsContainer = document.getElementById('buttons-container');\n  questionContainer.textContent = `Quiz completed! Your score: ${score} out of ${quizQuestions.length}`;\n  buttonsContainer.innerHTML = '';\n}\ndisplayQuestion();\n\n//# sourceURL=webpack://12_building_performance/./src/main.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/main.js"));
/******/ }
]);