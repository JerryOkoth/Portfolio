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




// Contact section

// document.querySelector('#contact-form').addEventListener('submit', (e) => {
//     e.preventDefault();

//     // Disable the button and add loading state
//     const submitBtn = document.getElementById('submit-btn');
//     submitBtn.textContent = 'Sending...';
//     submitBtn.classList.add('loading');

//     setTimeout(() => {
//         // Reset the form after successful submission simulation
//         document.getElementById('contact-form').reset();
//         submitBtn.textContent = 'Send Message';
//         submitBtn.classList.remove('loading');
//         alert('Message sent successfully!');
//     }, 2000);
// });


// Footer Section

document.querySelector('.scroll-up a').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});












                






