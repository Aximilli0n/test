const character = document.querySelector('.character');
const container = document.querySelector('.game-container');
const messageBox = document.createElement('div'); // Create a message box

messageBox.className = 'message-box'; // Assign the CSS class to the message box

container.appendChild(messageBox); // Append the message box to the game container

messageBox.style.position = 'absolute';
messageBox.style.bottom = '350px';
messageBox.style.left = '50px';
messageBox.style.padding = '10px';
messageBox.style.background = 'rgba(0, 0, 0, 0.7)';
messageBox.style.color = 'white';
messageBox.style.fontSize = '16px';
messageBox.style.borderRadius = '5px';
messageBox.style.display = 'none';

let position = 50; // Character position
let isIdle = false;
let isWalking = false;
let spriteIndex = 0;
let animationInterval;
let moveInterval;

const checkpoints = [
  { position: 200, message: "You know, You mean a lot to me pookie. If I could I would give you so much more, but even this goofy game and quizz doesn't feels enough" },
  { position: 380, message: "But it's something new. I took help from chatGPT and did some drawing editing myself but I'm excited to show you this." },
  { position: 500, message: "I really really really really really like you pookie! ALSO HAPPY BIRTHDAY!!!!!!!!!!!!!!!💜 💜 💜 💜 💜 💜 💜  AAAAAAA 23 FINALLY!!!!! waddup granny🤭 " },
  { position: 680, message: "New challenges ahead, but I'm glad to say that I'm excited to face them with you and grow together. it's gonna be fun and interesting!💜 " },
  { position: 880, message: "I also wanted to say that I would love to go on dates with you. like walk on beach, going to resturaunt to eat, going to other fun places💜 " },
  { position: 1020, message: "but since we cannot right now. I do not mind minecraft, genshin or any other games date together. I like every moment we have together.💜 " },
  { position: 1200, message: "Every moment is a lot more fun with you. When you are away I keep waiting cuz I got nothing to do I just sulk and wait for you to return💜 " },
  { position: 1400, message: "You my bestfriend and my everything. I appreciate you! Im very very very grateful to have you and just want you and no one else for rest of my life.💜 " },
  { position: 1600, message: "to eat together, grow old together, waking up together, our gaming setups together, scrolling and watching brain rot together ugh Im so excited. May God guide us and bring us close💜 " },
  { position: 1800, message: "Again Happy birthday bobo!!! I LIKE YOU!!!!!!!!! VERY VERY VERY VERY MUCH AND IM VERY HAPPY TO BE ABLE TO SPEND THIS YEAR WITH YOU!!!!!💜 💜 💜 💜 💜 💜 💜 " },
];
let currentCheckpointIndex = -1;

document.addEventListener('keydown', (event) => {
  if ((event.key === 'a' || event.key === 'A') || (event.key === 'd' || event.key === 'D')) {
    if (isIdle) {
      stopIdle();
    }
    if (!isWalking) {
      startWalking(event.key);
    }
  }
});

document.addEventListener('keyup', (event) => {
  if ((event.key === 'a' || event.key === 'A') || (event.key === 'd' || event.key === 'D')) {
    stopWalking();
    startIdle();
  }
});

// Start walking
function startWalking(key) {
  isWalking = true;

  clearInterval(animationInterval);
  clearInterval(moveInterval);

  animationInterval = setInterval(() => {
    character.style.backgroundImage = `url('./img/walk_${(spriteIndex % 3) + 1}.png')`;
    spriteIndex++;
  }, 150);

  moveInterval = setInterval(() => {
    if (key === 'a' || key === 'A') {
      character.style.transform = 'scaleX(-1)';
      moveCharacter(-5);
    } else if (key === 'd' || key === 'D') {
      character.style.transform = 'scaleX(1)';
      moveCharacter(5);
    }
  }, 50);
}

// Stop walking
function stopWalking() {
  isWalking = false;
  clearInterval(animationInterval);
  clearInterval(moveInterval);
}

// Start idle animation
function startIdle() {
  if (isIdle) return;
  isIdle = true;

  animationInterval = setInterval(() => {
    character.style.backgroundImage = `url('./img/hug/hug_${(spriteIndex % 2) + 3}.png')`;
    spriteIndex++;
  }, 1000);
}

// Stop idle animation
function stopIdle() {
  isIdle = false;
  clearInterval(animationInterval);
}

// Move character and check for messages
function moveCharacter(step) {
  const previousPosition = position;
  position = Math.max(0, Math.min(container.offsetWidth - 128, position + step));
  character.style.left = `${position}px`;

  // Check if the character has moved away from the current checkpoint
  if (
    currentCheckpointIndex !== -1 &&
    Math.abs(position - checkpoints[currentCheckpointIndex].position) > 20 // Adjust the distance threshold
  ) {
    hideMessage(); // Hide the message if the character moves away
    currentCheckpointIndex = -1; // Reset the checkpoint
  }

  // Check if the character has reached a new checkpoint
  for (let i = 0; i < checkpoints.length; i++) {
    if (
      position >= checkpoints[i].position - 5 &&
      position <= checkpoints[i].position + 5 &&
      i !== currentCheckpointIndex // Avoid repeating the same checkpoint
    ) {
      showMessage(checkpoints[i].message);
      currentCheckpointIndex = i;
      break;
    }
  }
}

function showMessage(message) {
  messageBox.innerText = message;

  // Calculate new message position
  let messageLeft = position;

  // Ensure the message box doesn't go off the screen
  const containerWidth = container.offsetWidth;
  const messageWidth = messageBox.offsetWidth || 300; // Approximate width if not yet calculated

  if (messageLeft + messageWidth > containerWidth) {
    // If it overflows the right side, shift it to fit
    messageLeft = containerWidth - messageWidth - 10; // 10px margin
  }

  if (messageLeft < 0) {
    // If it overflows the left side, push it slightly right
    messageLeft = 10; // 10px margin
  }

  messageBox.style.left = `${messageLeft}px`;
  messageBox.style.display = 'block';
}



// Hide message
function hideMessage() {
  messageBox.style.display = 'none';
}
