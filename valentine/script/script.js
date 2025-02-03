const yesOption = document.getElementById("YES");
const noOption = document.getElementById("NO");
const container = document.querySelector(".container");

let yesPadding = 20; // Initial padding for Yes
let noTexts = ["No", "(no) Are you sure?", "(no) Are you really, really sure?", "(no) Do you mean it?", "(no) noooo stoooop pressing no :C", "(no) Do you not like me back Gidan much? :C", "(no) Why are you still pressing no? :C", "(no) do you really not wanna?", "(no) Well. . .imma give you the right option to pick to simplify it for you"];
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
