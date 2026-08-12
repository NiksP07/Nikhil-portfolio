// =====================================================
// MOBILE NAVIGATION
// =====================================================


// Find the menu button
const menuToggle = document.getElementById("menu-toggle");


// Find the navigation menu
const navLinks = document.getElementById("nav-links");


// Listen for a click on the menu button
menuToggle.addEventListener("click", function () {

    // Add or remove the "active" class
    navLinks.classList.toggle("active");

});

// Close the menu when a navigation link is clicked

const navItems = document.querySelectorAll(".nav-links a");


navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});

// =====================================================
// SCROLL REVEAL ANIMATION
// =====================================================


// Find all elements that should be animated
const revealElements = document.querySelectorAll(".reveal");


// Create an observer
const revealObserver = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        // Check if the element is visible on screen
        if (entry.isIntersecting) {

            // Add the visible class
            entry.target.classList.add("visible");

        }

    });

});


// Start watching every reveal element
revealElements.forEach(function (element) {

    revealObserver.observe(element);

});