const numbersContainer = document.querySelector(".numbers-container");
const quoteContainer = document.getElementById("quote-container");
const generateBtn = document.getElementById("generate-btn");
const lightModeBtn = document.getElementById("light-mode-btn");
const darkModeBtn = document.getElementById("dark-mode-btn");
const htmlElement = document.documentElement;

// Quotes Array
const quotes = [
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "The only way to do great work is to love what you do.",
    "Believe you can and you're halfway there.",
    "Everything you've ever wanted is on the other side of fear.",
    "Don't count the days, make the days count.",
    "The secret of getting ahead is getting started.",
    "It always seems impossible until it's done.",
    "Luck is what happens when preparation meets opportunity.",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you."
];

// Theme Logic
const setSystemTheme = (theme) => {
    htmlElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
};

const currentTheme = localStorage.getItem("theme") || "light";
setSystemTheme(currentTheme);

lightModeBtn.addEventListener("click", () => setSystemTheme("light"));
darkModeBtn.addEventListener("click", () => setSystemTheme("dark"));

// Lotto & Quote Logic
generateBtn.addEventListener("click", () => {
    // Clear previous numbers and quote
    numbersContainer.innerHTML = "";
    quoteContainer.textContent = "";

    // Generate Numbers
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach(number => {
        const numberDiv = document.createElement("div");
        numberDiv.classList.add("number");
        numberDiv.textContent = number;
        numbersContainer.appendChild(numberDiv);
    });

    // Generate Random Quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteContainer.textContent = randomQuote;
});