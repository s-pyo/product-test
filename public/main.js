const numbersContainer = document.querySelector(".numbers-container");
const generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener("click", () => {
    numbersContainer.innerHTML = ""; // 이전 번호 삭제
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
});