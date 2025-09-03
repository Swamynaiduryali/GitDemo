let btn = document.getElementById("btn");
let countElement = document.getElementById("count");
let count = 0;

btn.addEventListener("click", () => {
    count++;
    countElement.textContent = count;
});
