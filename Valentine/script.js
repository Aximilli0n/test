document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const playArea = document.getElementById("playArea");
  const gif = document.getElementById("gif");
  const container = document.getElementById("container");

  // --- settings ---
  const dangerDistance = 100;
  const shrinkAmount = 2;
  const minSize = 50;
  const turnsIntoYesAfter = 10;

  const originalWidth = noBtn.offsetWidth;
  const originalHeight = noBtn.offsetHeight;

  let buttonWidth = originalWidth;
  let buttonHeight = originalHeight;
  let moveCount = 0;
  let turnedIntoYes = false;

  function moveNoButtonRandomly() {
    const areaRect = playArea.getBoundingClientRect();
    const maxLeft = areaRect.width - buttonWidth;
    const maxTop = areaRect.height - buttonHeight;

    noBtn.style.left = (Math.random() * Math.max(0, maxLeft)) + "px";
    noBtn.style.top  = (Math.random() * Math.max(0, maxTop)) + "px";
    noBtn.style.transform = "none";
  }

  // ✅ GIF ending: hide only the game area, show gif
  function showGifScreen() {
    playArea.style.display = "none";
    gif.style.display = "flex";
  }

  // ✅ Cute ending: hide container + show message overlay
  function showCuteMessage() {
    container.style.display = "none";

    if (document.getElementById("cuteMessage")) return;

    const cuteDiv = document.createElement("div");
    cuteDiv.id = "cuteMessage";
    cuteDiv.textContent = "YAAAY!! 💖";
    document.body.appendChild(cuteDiv);
  }

  playArea.addEventListener("mousemove", (e) => {
    if (turnedIntoYes) return;

    const btnRect = noBtn.getBoundingClientRect();
    const btnCenterX = btnRect.left + btnRect.width / 2;
    const btnCenterY = btnRect.top + btnRect.height / 2;

    const distance = Math.hypot(btnCenterX - e.clientX, btnCenterY - e.clientY);

    if (distance < dangerDistance) {
      moveCount++;

      // shrink
      if (buttonWidth > minSize && buttonHeight > minSize) {
        buttonWidth -= shrinkAmount;
        buttonHeight -= shrinkAmount;
        noBtn.style.width = buttonWidth + "px";
        noBtn.style.height = buttonHeight + "px";
        noBtn.style.padding = "0";
      }

      moveNoButtonRandomly();

      // transform into YES!!
      if (moveCount >= turnsIntoYesAfter) {
        turnedIntoYes = true;

        noBtn.textContent = "YES!!";
        noBtn.style.backgroundColor = "#1fd06f";
        noBtn.style.width = (originalWidth * 2) + "px";
        noBtn.style.height = (originalHeight * 2) + "px";
        noBtn.style.fontSize = "34px";
        noBtn.style.padding = "0";

        buttonWidth = originalWidth * 2;
        buttonHeight = originalHeight * 2;

        const areaRect = playArea.getBoundingClientRect();
        noBtn.style.left = (areaRect.width / 2 - buttonWidth / 2) + "px";
        noBtn.style.top  = (areaRect.height / 2 - buttonHeight / 2) + "px";
        noBtn.style.transform = "none";

        // ✅ clicking big YES shows gif
        noBtn.onclick = showGifScreen;
      }
    }
  });

  // ✅ Real yes = cute ending if pressed early
  yesBtn.addEventListener("click", () => {
    if (!turnedIntoYes) showCuteMessage();
    else showGifScreen();
  });
});
