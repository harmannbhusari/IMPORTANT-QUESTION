// ===============================
// PAGE 1 → PAGE 2
// ===============================

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

page1.addEventListener("click", function () {
    page1.classList.remove("active");
    page2.classList.add("active");
});


// ===============================
// YES BUTTON
// ===============================

const yesBtn = document.getElementById("yesBtn");
const answer = document.getElementById("answer");

yesBtn.addEventListener("click", function (event) {
    event.stopPropagation();

    answer.innerHTML = "Yay! I knew it! 💖🥰✨ I LOVE YOU SOO MUCH💖😘";
});


// ===============================
// NO BUTTON
// ===============================

const noBtn = document.getElementById("noBtn");
const thinkMessage = document.getElementById("thinkMessage");

let escapeCount = 0;

const MAX_ESCAPES = 20;


// ===============================
// MOUSE ENTERS NO
// ===============================

noBtn.addEventListener("mouseenter", function () {

    escapeCount++;

    console.log("NO escaped:", escapeCount);


    // Show message
    thinkMessage.style.display = "block";


    // =================================
    // FIRST 20 TIMES
    // =================================

    if (escapeCount <= MAX_ESCAPES) {

        const buttonWidth = noBtn.offsetWidth;
        const buttonHeight = noBtn.offsetHeight;

        const padding = 20;


        // Keep button completely inside window
        const maxX =
            window.innerWidth -
            buttonWidth -
            padding;

        const maxY =
            window.innerHeight -
            buttonHeight -
            padding;


        // Random position
        const randomX =
            Math.floor(Math.random() * maxX);

        const randomY =
            Math.floor(Math.random() * maxY);


        // Move button
        noBtn.style.position = "fixed";

        noBtn.style.left =
            randomX + "px";

        noBtn.style.top =
            randomY + "px";


        // Message above button
        thinkMessage.style.position = "fixed";

        thinkMessage.style.left =
            randomX + "px";

        thinkMessage.style.top =
            (randomY - 35) + "px";
    }


    // =================================
    // AFTER 20 TIMES
    // =================================

    else {

        noBtn.style.position = "fixed";

        noBtn.style.left =
            window.innerWidth + "px";

        noBtn.style.top =
            "50%";


        thinkMessage.style.left =
            window.innerWidth + "px";

        thinkMessage.style.top =
            "45%";
    }

});
