// grabs all the button and number from HTML element
let counter = document.getElementById("counter");
let button = document.querySelectorAll(".btn");
let counterArea = document.getElementById("counter-area");
// set number as default to zero
let number = 0;
// grab all button with forEeach
// e means to kind of button in HTML
button.forEach((e) => {
    // e -> in each button has click
    return e.addEventListener("click", (target) => {
        // target to different button
        let data = target.currentTarget;
        // if button contains with class of increase so we add 1 to the number
        if (data.classList.contains("increase")) {
            number++;
        }
        // if button contains with class of decrease so we subtract 1 to the number
        else if (data.classList.contains("decrease")) {
            number--;
        }
        // if button contains with class of reset so the number is equal to zero
        else {
            number *= 0;
        }
        // In this function we solve that if number > 0 (we set background to green), number < 0 (we set background to red) and number = 0 (we set background to default)
        function changeCounter() {
            if (number > 0) {
                counterArea.style.background = "#4acb8a";
                counter.style.color = "#fff";
            }
            else if (number < 0) {
                counterArea.style.background = "#f94348";
                counter.style.color = "#fff";
            }
            else {
                counterArea.style.background = "#fff";
                counter.style.color = "#555";
            }
        }
        changeCounter();
        counter.textContent = number;
    })
})
counter.textContent = number;