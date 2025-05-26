const buttons = document.querySelectorAll('.btn button')


buttons.forEach((button) => {
    button.addEventListener("click", function () {
        const container = button.closest('.text-content');
        const fullText = container.querySelector('.full-text')
        const shortText = container.querySelector('.short-text')

        fullText.classList.toggle('hidden');
        shortText.classList.toggle('hidden');


        button.textContent = fullText.classList.contains('hidden') ? 'Learn More' : "Hide"
    })
})

