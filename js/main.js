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





