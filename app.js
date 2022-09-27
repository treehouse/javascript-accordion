const accordions = document.querySelectorAll('.accordion');
accordions.forEach(accordion => {
    accordion.addEventListener('click', e => {
        accordion.classList.toggle('active');
        let accordionBtn = accordion.querySelector('button');
        if (accordionBtn.textContent === '+') {
            accordionBtn.textContent = '-';
        } else {
            accordionBtn.textContent = '+';
        }
    })
});
