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
    "Well I wanted to tell you that. You my love are very goofy! You make me very very happy and not gonna lie I enjoy every single moment with you💜",
    " You are so goofy that it makes me happy and makes my heart smile. YOU ALSO A BULLY  like teasing me when I mispronounce lol I love it tho.💜",
    "You give me butterflies like crashy and make me fall for you harder every day! Everyday I want to give you more and more. Literally wanna give everyting I have and will have.💜",
    "This is probably how I will be when I finally get to see you in person. You have a beautiful heart. Very kind and loving and caring person!💜",
    "I fr like you and it sucks to wait, but It's gonna be worth it when we can finally be together!!! Then we do genshin dailies together in person lol💜",
    "HAPPY ANNIVERSARY AGAIN BOOBOO!!!!! I LIKE YOU SO SO SO SO GIDAN GIDAN GIDAN GIDAN GIDAN MUCH!!!! 1 year and 10 months!!! LETS GO FOR MORE AND may God guide us closer and together💜💜💜💜💜💜💜"
];

const images =[
    "./img/blush hard.jpg",
    "./img/kiut.jpg",
    "./img/myheart.jpg",
    "./img/obsessed.jpg",
    "./img/stare.jpg",
    "./img/waiting.jpg",
    "./img/squeeze.gif",
    "./img/inlove.png",
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
        header.textContent = "Well this is the end of the messages. I hope you liked it booboo. I will say tho this is just the beginning. In future as I learn more I might make more if you liked this one + this will always be avaliable unlike the bot lol.💜"
        image.src = "./img/hug.gif";

        document.querySelector("button").disabled = true;
    }
}

