document.addEventListener("DOMContentLoaded", function () {
    const headings = document.querySelectorAll("h2");
    headings.forEach((heading) => {
      heading.addEventListener("click", function () {
        // Check if the card already exists
        const cardExists = this.nextElementSibling && this.nextElementSibling.classList.contains("card");
        if (!cardExists) {
          // Create the card element
          const card = document.createElement("div");
          card.classList.add("card");
          // Move the ul element to the card
          const ulElement = this.nextElementSibling;
          card.appendChild(ulElement);
          // Insert the card after the heading
          this.parentNode.insertBefore(card, this.nextElementSibling);
        } else {
          // Toggle the visibility of the card
          this.nextElementSibling.classList.toggle("show");
        }
      });
    });
  });

