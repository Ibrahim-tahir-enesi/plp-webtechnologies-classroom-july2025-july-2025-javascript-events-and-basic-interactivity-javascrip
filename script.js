// ==========================
// Interactive Web Page - Ibrahim Tahir
// ==========================

// PART 1: EVENT HANDLING
// Toggle Dark Mode
const toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// PART 2: INTERACTIVE ELEMENTS
// Counter Feature
let count = 0;
const countDisplay = document.getElementById("count");
document.getElementById("increaseBtn").addEventListener("click", function () {
  count++;
  countDisplay.textContent = count;
});
document.getElementById("resetBtn").addEventListener("click", function () {
  count = 0;
  countDisplay.textContent = count;
});

// FAQ Toggle
const faqTitle = document.getElementById("faqTitle");
const faqAnswer = document.getElementById("faqAnswer");
faqTitle.addEventListener("click", function () {
  if (faqAnswer.style.display === "none") {
    faqAnswer.style.display = "block";
  } else {
    faqAnswer.style.display = "none";
  }
});

// PART 3: FORM VALIDATION
const form = document.getElementById("registerForm");
const messageBox = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop form from submitting

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  let errors = [];

  // Validate name
  if (name === "") {
    errors.push("Name is required.");
  }

  // Validate email with regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    errors.push("Enter a valid email address.");
  }

  // Validate password (at least 6 characters)
  if (password.length < 6) {
    errors.push("Password must be at least 6 characters.");
  }

  // Show results
  if (errors.length > 0) {
    messageBox.style.color = "red";
    messageBox.innerHTML = errors.join("<br>");
  } else {
    messageBox.style.color = "green";
    messageBox.textContent = "Form submitted successfully!";
    form.reset();
  }
});
