var typed = new Typed("#typed", {
    strings: ["Larry Daniels","developer", "designer"],
    typeSpeed: 100, // Speed of typing (in milliseconds)
    backSpeed: 50, // Speed of backspacing
    loop: true, // Loop the typing animation
    backDelay: 1000, // Delay before starting to backspace
    startDelay: 500, // Delay before typing starts
    showCursor: true, // Show blinking cursor
    cursorChar: "|", // Customize the cursor character
  });


  
// Select all sections and nav links
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-link2");

// Function to update active link based on scroll position
function updateActiveLink() {
  let currentSection = "";

  // Loop through each section to find which one is in the viewport
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    // Check if the section is in the viewport
    if (scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });

  // Remove active class from all links, then add to current section link
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

// Listen to the scroll event
window.addEventListener("scroll", updateActiveLink);

