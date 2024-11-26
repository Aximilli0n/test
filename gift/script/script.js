function hearts(){ // creates hearts and makes hearts rain.
    const container = document.querySelector(".container");
    const creat = document.createElement('div');
    creat.classList.add('hearts');
    creat.innerHTML= "💜";

    creat.style.left = Math.random() * 100 + "vw";
    creat.style.animationDuration = Math.random() * 3 + 2 + 's';

    container.appendChild(creat);
    setTimeout(()=>{
        creat.remove();
    }, 3000)
}
hearts();
setInterval(hearts,80);

// controls music and its audio.

let music = document.getElementById("song");
music.volume = 0.1; // Set volume to 50%

music.play().catch(error => {
    console.error("Audio playback failed:", error);
});



const messages = [
    "Well would you look at that! already smiling? we haven't even started yet!!💜",
    "Well I wanted to tell you that. You my love are very goofy!💜",
    "So goofy that it makes me happy and makes my heart smile.💜",
    "You give me butterflies like crashy and make me fall for you harder every day!💜",
    "This is probably how I will be when I finally get to see you in person💜",
    "I fr like you and it sucks to wait, but It's gonna be worth it when we can finally be together💜",
    "HAPPY ANNIVERSARY AGAIN BOOBOO!!!!! I LIKE YOU SO SO SO SO GIDAN GIDAN GIDAN GIDAN GIDAN MUCH!!!! 💜💜💜💜💜💜💜"
];

const images =[
    "../img/blush hard.jpg",
    "../img/kiut.jpg",
    "../img/myheart.jpg",
    "../img/obsessed.jpg",
    "../img/stare.jpg",
    "../img/waiting.jpg",
    "../img/inlove.png",
];



currentIndex = 0;

function next(){
    const header = document.getElementById("text");
    const image = document.getElementById("galleryImage");

    document.getElementById("head").style.display = "none";
    
    if(currentIndex < messages.length){
        header.textContent = messages[currentIndex];
        image.src = images[currentIndex];
        currentIndex++;
    } else{
        header.textContent = "Well this is the end of the messages. I hope you liked it booboo. I will say tho this is just the beginning of my creativity💜"
        image.src = "./img/hug.gif";

        document.querySelector("button").disabled = true;
    }
}

