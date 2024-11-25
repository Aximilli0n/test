const yesBtn = document.getElementsByClassName("yes");
let noClickCount = 0; // Counter for "No" button clicks
const question = document.getElementById("question"); // Reference to the question text

function no() {
    noClickCount++; // Increment the counter each time the "No" button is clicked

    // Update the question text based on the number of clicks
    if (noClickCount === 1) {
        question.innerText = "woah what? you pressed no? really? let's redo this. do you love me?";
    } else if (noClickCount === 2) {
        question.innerText = "ARE YOU FR? YOU DON'T LOVE ME?";
    } else if (noClickCount === 3){
        question.innerText = "ARE YOU REALLY REALLY REALLY SURE? you dont wanna rethink?"
    } else if (noClickCount === 4){
        question.innerText = "You don't really have a choice 💜"
    }

    // Randomize location of "No" button 3 times
    if (noClickCount <= 3) {
        const noBtn = document.querySelector(".no");
        const randomX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const randomY = Math.random() * (window.innerHeight - noBtn.offsetHeight);

        noBtn.style.position = "absolute";
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    }

    // After 3 randomizations, turn the "No" button into a "Yes" button
    if (noClickCount === 4) {
        const noBtn = document.querySelector(".no");
        noBtn.innerText = "Yes";
        noBtn.className = "yes"; // Change the class to "yes"
        noBtn.onclick = yes; // Assign the "Yes" function to the new button
    }
}

function yes() {
    // Hide page-1
    document.querySelector(".page-1").style.display = "none";
    
    // Show page-2
    document.querySelector(".page-2").style.display = "flex";

    // Show the reveal text
    document.querySelector("#reveal").style.display = "flex";
}
