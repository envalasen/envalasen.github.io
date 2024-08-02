// NAVIGATION AID SYSTEM --> TELLING THE USER WHICH SECTION THEY ARE CURRENTLY IN

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav-links a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 300;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.nav-links a[href*=' + id + ']').classList.add('active');
            })
        };
    });  
};

// HAMBURGER MENU TOOGLE

function toogleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

// SLIDER

let currentSlide = 0;

function nextSlide() {
    let index = currentSlide + 1;
    const slides = document.querySelectorAll('.slide');
    const slider = document.querySelector('.slider');
    if (index >= slides.length) {
        slides[currentSlide].style.transform = `translateX(0%)`;        
        currentSlide = 0
        return;
    }
    else if (index < 0) {
        currentSlide = slides.length -1;
    }
    else {
        currentSlide = index;
    }

    console.log(currentSlide);

    slides[currentSlide].style.transform = `translateX(-${currentSlide * 100}%)`;
}

function prevSlide() {
    let index = currentSlide - 1;
    const slides = document.querySelectorAll('.slide');
    const slider = document.querySelector('.slider');
    if (index >= slides.length) {
        currentSlide = 0
    }
    else if (index < 0) {
        currentSlide = slides.length -1;
    }
    else {
        currentSlide = index;
    }

    console.log(currentSlide);

    slides[currentSlide].style.transform = `translateX(${currentSlide * 100}%)`;
}