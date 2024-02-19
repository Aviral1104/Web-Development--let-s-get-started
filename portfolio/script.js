// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Dropdown Menu Functionality
    var dropdownBtn = document.querySelector(".dropbtn");
    var dropdownContent = document.querySelector(".dropdown-content");
    dropdownBtn.addEventListener("click", function() {
        dropdownContent.classList.toggle("hidden");
    });
    // Smooth Scroll to Section
    var sectionLinks = document.querySelectorAll(".dropdown-content a");
    sectionLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            var targetId = link.getAttribute("href").substring(1);
            var targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
                dropdownContent.classList.add("hidden");
            }
        });
    });
});

