const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-vertical');
    const navLinksItems = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-show');

        // Animation Links
        navLinksItems.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.5}s`
            }
        })
    })
};

navSlide();