const yesOption = document.getElementById("YES");
const noOption = document.getElementById("NO");
const container = document.querySelector(".container");

let yesPadding = 20; // Initial padding for Yes
let noTexts = ["No", "Are you sure?", "Are you really, really sure?", "Do you mean it?", "noooo stoooop pressing no :C", "Do you not like me back Gidan much? :C", "Why are you still pressing no? :C", "do you really not wanna?", "Well too bad you dont have a choice :>"];
let noIndex = 0; // Tracks the current text index

noOption.addEventListener("click", () => {
    // Change the "No" text to the next in the array
    noIndex++;
    if (noIndex < noTexts.length) {
        noOption.textContent = noTexts[noIndex];
    } else {
        document.getElementById("NO").style.display= "none";
    }

    // Increase padding for Yes
    yesPadding += 40;
    yesOption.style.padding = `${yesPadding}px`;
});

yesOption.addEventListener("click", () => {
    // Clear the container
    container.innerHTML = "";

    // Add a new message
    const message = document.createElement("h1");
    message.textContent = "THANK YOU!!!!!!! I'm honored to be able to spend another valentines day with you 💜";
    message.style.textAlign = "center";

    // Add an image
    const image = document.createElement("img");
    image.src = "./img/dancing_cat.gif"; // Replace with your image path
    image.alt = "Heart Image";
    image.style.width = "200px";
    image.style.marginTop = "20px";
    image.style.borderRadius = "20px";
    image.style.alignSelf = "center";

    // Append the new elements to the container
    container.appendChild(message);
    container.appendChild(image);
});
