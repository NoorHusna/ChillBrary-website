
/* =============== script.js =============== */

document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll("form");
  forms.forEach(form => {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Thank you for your submission!");
      form.reset();
    });
  });
});
// Guess the Emoji Game
const questions = [
  { hint: "Makanan bulat dari Itali", answer: "🍕" },
  { hint: "Haiwan dengan belalai", answer: "🐘" },
  { hint: "Simbol cinta", answer: "❤️" },
  { hint: "Minuman pagi", answer: "☕" },
  { hint: "Bintang waktu malam", answer: "🌟" },
  { hint: "Buah warna kuning", answer: "🍌" },
  { hint: "Kenderaan laju di langit", answer: "✈️" }
];

let currentQuestionIndex = 0;

function showHint() {
  document.getElementById("hint").textContent = questions[currentQuestionIndex].hint;
  document.getElementById("userInput").value = "";
  document.getElementById("result").textContent = "";
}

function checkGuess() {
  const userInput = document.getElementById("userInput").value.trim();
  const correctAnswer = questions[currentQuestionIndex].answer;

  if (userInput === correctAnswer || userInput.includes(correctAnswer)) {
    document.getElementById("result").textContent = "✅ Betul! Bagus!";
    document.getElementById("result").style.color = "green";
  } else {
    document.getElementById("result").textContent = "❌ Salah. Cuba lagi!";
    document.getElementById("result").style.color = "red";
  }
}

function nextQuestion() {
  currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
  showHint();
}

// Mula game
window.onload = showHint;
