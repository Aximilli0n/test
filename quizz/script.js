// Grab elements once
const page1El = document.getElementById("page1");
const page2El = document.getElementById("page2");
const questionText = document.getElementById("questionText");
const answersDiv = document.getElementById("answers");
const questionImage = document.getElementById("questionImage");

// Quiz data
const questions = [
  {
    text: "Question 1: What is my name?",
    answers: ["Aman", "Skibidy man", "Bro"],
    correctIndex: 0,
    imgCorrect: "./img/joy.jpg",
    imgWrong: "./img/angry.jpg",
  },
  {
    text: "Question 2: What is my height?",
    answers: ["135cm", "172/173cm", "180/181cm"],
    correctIndex: 1,
    imgCorrect: "./img/joy.jpg",
    imgWrong: "./img/angry.jpg",
  },
  {
    text: "Question 3: What is my last name?",
    answers: ["Sing", "Singh", "Sinngh"],
    correctIndex: 1,
    imgCorrect: "./img/joy.jpg",
    imgWrong: "./img/angry.jpg",
  },
  {
    text: "Question 4: What is my biological Sister's nickname?",
    answers: ["Jasmine", "Dipali", "Jas"],
    correctIndex: 2,
    imgCorrect: "./img/joy.jpg",
    imgWrong: "./img/angry.jpg",
  },
  {
    text: "Question 5: Who is my closest friend?",
    answers: ["Wan", "Pat", "Mimi"],
    correctIndex: 2,
    imgCorrect: "./img/joy.jpg",
    imgWrong: "./img/angry.jpg",
  },
  {
    text: "Question 6: What is my job title?",
    answers: ["Email", "Mechanic", "Mental health nurse"],
    correctIndex: 2,
    imgCorrect: "./img/joy.jpg",
    imgWrong: "./img/angry.jpg",
  },
  {
    text: "Question 7: What was my last tattoo?",
    answers: ["Dragon", "Cross", "Archangel"],
    correctIndex: 2,
    imgCorrect: "./img/joy.jpg",
    imgWrong: "./img/angry.jpg",
  },
  {
    text: "Question 8: Who I started to main for you? ",
    answers: ["Spiderman", "Magneto", "Dr strange"],
    correctIndex: 1,
    imgCorrect: "./img/joy.jpg",
    imgWrong: "./img/angry.jpg",
  },
  {
    text: "Question 9: Who I c6 first?",
    answers: ["Yelan", "Furina", "Mauvika"],
    correctIndex: 0,
    imgCorrect: "./img/joy.jpg",
    imgWrong: "./img/angry.jpg",
  },
  {
    text: "Question 10: When is my birth year? ",
    answers: ["1997", "1996", "1998"],
    correctIndex: 0,
    imgCorrect: "./img/joy.jpg",
    imgWrong: "./img/angry.jpg",
  },
  
];

let current = 0;
let score = 0;

// This is what your HTML onclick calls
function page2() {
  page1El.style.display = "none";
  page2El.style.display = "block"; // or "flex" if you want
  const bgMusic = document.getElementById("bgMusic");
  bgMusic.volume = 0.5; // soft background music
  bgMusic.currentTime = 0;
  bgMusic.play();
  renderQuestion();
}

function renderQuestion() {
    answersDiv.innerHTML = "";
    questionImage.src = "./img/thinking.jpg";
  
    if (current >= questions.length) {
      questionText.textContent = "";
      answersDiv.innerHTML = "";
  
      // ✅ STOP background music on score screen (always)
      const bgMusic = document.getElementById("bgMusic");
      if (bgMusic) {
        bgMusic.pause();
        bgMusic.currentTime = 0;
      }
  
      const total = questions.length;
      const resultTitle = document.getElementById("resultTitle");
  
      if (score >= 2 && score <= 5) {
        resultTitle.textContent = "I thought you knew me . .";
        questionImage.src = "./img/enraged.jpg";
  
      } else if (score >= 6 && score <= 8) {
        resultTitle.textContent = "tsk tsk you asked for quizz and now look at you";
        questionImage.src = "./img/what.jpg";
  
      } else if (score === total) {
        resultTitle.textContent = "WOAH!!!!! YOU EARNED A WHOLE DAY OF ME ANNOYING YOU!!";
        questionImage.src = "./img/overjoy.jpg";
  
        document.body.classList.add("perfect-score");
  
        // ✅ Play win audio ONLY on perfect score
        const winAudio = document.getElementById("winAudio");
        if (winAudio) {
          winAudio.volume = 0.7;
          winAudio.currentTime = 0;
          winAudio.play().catch(() => {});
        }
  
      } else {
        resultTitle.textContent = "Hmm… Let's have a look";
      }
  
      return;
    }
  
    const q = questions[current];
    questionText.textContent = q.text;
  
    q.answers.forEach((answerText, index) => {
      const btn = document.createElement("button");
      btn.textContent = answerText;
      btn.addEventListener("click", () => handleAnswer(index));
      answersDiv.appendChild(btn);
    });
  }
  
  

function handleAnswer(chosenIndex) {
  const q = questions[current];
  const isCorrect = chosenIndex === q.correctIndex;

  if (isCorrect) score++;

  questionImage.src = isCorrect ? q.imgCorrect : q.imgWrong;

  setTimeout(() => {
    current++;
    renderQuestion();
  }, 800);
}
