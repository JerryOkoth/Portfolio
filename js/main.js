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
        }, index * 200); // Add delay to make each icon animate sequentially
    });
});

// hero image

const image = document.querySelector('.img-section img');

image.addEventListener('mouseover', () => {
    image.style.animationPlayState = 'paused'; // Pauses animation on hover
});

image.addEventListener('mouseout', () => {
    image.style.animationPlayState = 'running'; // Resumes animation on hover out
});






