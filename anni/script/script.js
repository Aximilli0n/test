function hearts() {
    const container = document.querySelector(".container-main");
    const creat = document.createElement("div");
    creat.classList.add("hearts");
    creat.innerHTML = "💜";

    creat.style.left = Math.random() * 100 + "vw";
    creat.style.animationDuration = Math.random() * 3 + 2 + "s";

    container.appendChild(creat);
    setTimeout(() => {
        creat.remove();
    }, 3000);
}
hearts();
setInterval(hearts, 80);

let point = 0;
let currentQuestionIndex = 0;
let username = "";

// Greet user and set up username
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#start").addEventListener("click", () => {
        page1();
        showPage2();
    });
});



let questions = [
    {
        question: "What is Maro's favorite food?",
        choices: ["Stuffed leaves", "Pitsa (pizza)", "Khosary"],
        correctChoice: 0,
    },
    {
        question: "What is your name?",
        choices: [], // Placeholder for dynamic username
        correctChoice: [1, 2],
    },
    {
        question: "Who is more Skibidy and Sigma?",
        choices: ["Silco", "Maro", "Ax"],
        correctChoice: [1, 2],
    },
    {
        question: "When did you first full clear abyss?",
        choices: ["11.2.2024", "6.1.2025", "15.5.2024"],
        correctChoice: 0,
    },
    {
        question: "Where do I live?",
        choices: ["Madinaty", "Salo", "Nigeria"],
        correctChoice: 1,
    },
    {
        question: "What was the first song I sent you when we met?",
        choices: ["I wanna be yours", "Baby I'm yours", "Maula mera"],
        correctChoice: 1,
    },
    {
        question: "Who was my first c6 character?",
        choices: ["Yelan", "Furina", "Mauvika"],
        correctChoice: 0,
    },
    {
        question: "Which GPU is better?",
        choices: ["1060 8GB", "3090 4GB", "4090 12GB"],
        correctChoice: 2,
    },
    {
        question: "How long have we been together?",
        choices: ["1 year", "6 months", "2 years"],
        correctChoice: 2,
    },
    {
        question: "Which is my favorite nickname?",
        choices: ["Buba", "baby", "The most awesomest, bestest, coolest bbg"],
        correctChoice: [0, 1, 2],
    },
];

function page1() {
    username = document.getElementById("nameInput").value.trim();
    if (!username) {
        alert("Nice to meet you, booboo!");
        username = "Human";
    } else {
        alert(`Nice to meet you, ${username}!`);
    }

    // Update the second question's choices dynamically
    questions[1].choices = [
        "Goofy clown",
        `Cooler ${username}`,
        `${username}`,
    ];
}


function showPage2() {
    // Hide page 1
    document.getElementById("page1").style.display = "none";

    // Show page 2
    document.getElementById("page2").style.display = "block";

    // Start the quiz with the first question
    loadNextQuestion();
}

function loadNextQuestion() {
    // Stop if there are no more questions
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }

    // Get the current question
    const currentQuestion = questions[currentQuestionIndex];

    // Update the question text
    document.getElementById("questionText").textContent = currentQuestion.question;

    // Update the choices dynamically
    const choiceButtons = document.querySelectorAll("#choices button");
    currentQuestion.choices.forEach((choice, index) => {
        if (choiceButtons[index]) {
            choiceButtons[index].textContent = choice; // Set button text
            choiceButtons[index].style.display = "block"; // Ensure button is visible
            choiceButtons[index].onclick = () => checkAnswer(index); // Add click event
        }
    });

    // Hide extra buttons if there are fewer choices
    for (let i = currentQuestion.choices.length; i < choiceButtons.length; i++) {
        choiceButtons[i].style.display = "none";
    }

    updateProgress();
}




function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];

    // Check if the answer is correct
    if (Array.isArray(currentQuestion.correctChoice)) {
        // For multiple correct choices
        if (currentQuestion.correctChoice.includes(selectedIndex)) {
            point++;
        }
    } else {
        // For a single correct answer
        if (selectedIndex === currentQuestion.correctChoice) {
            point++;
        }
    }

    // Move to the next question
    currentQuestionIndex++;

    // Load the next question or show results
    if (currentQuestionIndex < questions.length) {
        loadNextQuestion();
    } else {
        showResults();
    }
}


function updateProgress() {
    document.getElementById("currentQuestion").textContent = `${currentQuestionIndex + 1}/${questions.length}`;
    document.getElementById("playerScore").textContent = point;
}

function showResults() {

    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "block";

    const resultImage = document.querySelector("#page3 img");
    if (point <= 3) {
        resultImage.src = "./img/angry.jpg"; // Replace with your low-score image path
        resultImage.alt = "Angry goku";
        document.getElementById("playerResult").textContent = `Brother what is this? I knoW!!! that you can do better :C this is not very skibidy just ${point} points????`

        
    } else if (point <= 7) {
        resultImage.src = "./img/huh.jpg"; // Replace with your medium-score image path
        resultImage.alt = "huh???";
        document.getElementById("playerResult").textContent = `Funny how the tables turned huh. You say I dont remember stuff about you. Well well well ${point} points look what we got here (${point} points lol).`


    }  else if (point <= 9) {
        resultImage.src = "./img/lock in.jpg"; // Replace with your medium-score image path
        resultImage.alt = "Lock in";
        document.getElementById("playerResult").textContent = `${point} points? almost there! I feel like you messed up probably on the abyss question lol (I did it to mess with you)`


    }
     else {
        resultImage.src = "./img/marryme.jpg"; // Replace with your high-score image path
        resultImage.alt = "Max score";
        document.getElementById("playerResult").textContent = `SHEEEEEEESH YOU ACED IT???? Bro wanna get married? :> ${point} / 10 points???? SHEEEEESH BIG BRAIN! my smart pants!`

    }
}





function resetQuiz() {
    // Reset quiz variables
    point = 0;
    currentQuestionIndex = 0;

    // Reset progress
    document.getElementById("playerScore").textContent = point;
    document.getElementById("currentQuestion").textContent = 0/`${questions.length}`;

    // Reset questions if needed (shuffling logic can be added here)

    // Hide page3 and show page1
    document.getElementById("page3").style.display = "none";
    document.getElementById("page1").style.display = "block";

    // Reset username and name input field
    document.getElementById("nameInput").value = "";
}

document.getElementById("restart").addEventListener("click", resetQuiz);
