// JavaScript to toggle the menu visibility on small screens
const menuBtn = document.getElementById('menu-btn');       // Select the menu button
const navContent = document.getElementById('nav-content'); // Select the navigation content container

menuBtn.addEventListener('click', () => {  // Add an event listener to the menu button
    navContent.classList.toggle('show');   // Toggle the 'show' class on the navigation content container
});
