// js/script.js

// Functionality for flip cards
const flipCards = document.querySelectorAll('.flip-card');

flipCards.forEach(card => {
    card.addEventListener('click', function() {
        card.classList.toggle('flipped');
    });
});

// Smooth scrolling navigation
const menuLinks = document.querySelectorAll('a[href^="#"]');

menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Interactive elements
const interactiveElements = document.querySelectorAll('.interactive');

interactiveElements.forEach(element => {
    element.addEventListener('mouseover', function() {
        element.classList.add('hover-effect');
    });
    element.addEventListener('mouseout', function() {
        element.classList.remove('hover-effect');
    });
});

// Responsive menu
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', function() {
    menu.classList.toggle('active');
});



