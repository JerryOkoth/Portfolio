// Hamburger menu

const menu= document.querySelector('nav ul');
const menuBtn= document.querySelector('.menu-open');
const closeBtn= document.querySelector('.menu-close');

menuBtn.addEventListener('click', () =>{
    menu.classList.add('open')
})

closeBtn.addEventListener('click', () =>{
    menu.classList.remove('open')
})

// Hero text
window.addEventListener('load', () => {
    const heroDetail = document.querySelector('.hero-detail');
    heroDetail.classList.add('fade-in');
});

// hero icons Animation

window.addEventListener('load', () => {
    const icons = document.querySelectorAll('.hero-icons a');
    
    // Add the fade-bounce class to each icon
    icons.forEach((icon, index) => {
        setTimeout(() => {
            icon.classList.add('fade-bounce');
        }, index * 200); 
    });
});



// Scroll animation to make paragraphs fade in
const aboutTexts = document.querySelectorAll('.about-container p');

window.addEventListener('scroll', () => {
    const triggerPoint = window.innerHeight / 1.2; 
    
    aboutTexts.forEach(text => {
        const textTop = text.getBoundingClientRect().top;
        
        if (textTop < triggerPoint) {
            text.classList.add('visible');
        }
    });
});



// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    const projectImages = document.querySelectorAll(".project-image");

    // Function to add 'loaded' class to images when they finish loading
    projectImages.forEach((img) => {
        img.addEventListener("load", () => {
            img.classList.add("loaded");
        });

        // Preloading images: if already loaded
        if (img.complete) {
            img.classList.add("loaded");
        }
    });
});


                






