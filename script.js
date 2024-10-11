document.querySelectorAll(".faq-question").forEach(question => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        const toggleButton = question.querySelector(".toggle");

        if(answer.style.display === "block") {
            answer.style.display = "none";
            toggleButton.textContent = "v";
        } else {
            answer.style.display = "block";
            toggleButton.textContent = "^"
        }
    })
})