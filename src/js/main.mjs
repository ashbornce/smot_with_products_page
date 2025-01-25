import navbarFunction from "./navbar.mjs";
import sendEmail from "./formContact.mjs";

// ? Running function for navbar
navbarFunction();

// ?This is Send email function
document.getElementById('contactForm').addEventListener('submit', sendEmail);