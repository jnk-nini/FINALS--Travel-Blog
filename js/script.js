// script.js

// Form Validation
const contactForm = document.querySelector('form');

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission for validation

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('All fields are required!');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address!');
            return;
        }

        alert('Thank you for your message!');
        contactForm.reset();
    });
}

// Email Validation Function
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Interactive Button Feature
// Function to handle button click
function showContentAlert(destination) {
    alert(`Stay tuned for more content on ${destination}! More details coming soon.`);
}

// Adding event listeners to buttons
document.getElementById('chocolate-hills-btn').addEventListener('click', function() {
    showContentAlert('Chocolate Hills');
});

document.getElementById('mayon-volcano-btn').addEventListener('click', function() {
    showContentAlert('Mayon Volcano');
});

document.getElementById('sohoton-cove-btn').addEventListener('click', function() {
    showContentAlert('Sohoton Cove');
});
