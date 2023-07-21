document.addEventListener("DOMContentLoaded", function () {
    // Get all filter items
    const filterItems = document.querySelectorAll(".item-f");

    // Get all portfolio cards
    const portfolioCards = document.querySelectorAll(".portfolio-card");

    // Add click event listeners to filter items
    filterItems.forEach((item) => {
      item.addEventListener("click", function () {
        // Remove active class from all filter items
        filterItems.forEach((item) => item.classList.remove("active"));

        // Add active class to the clicked filter item
        this.classList.add("active");

        // Get the selected technology from the clicked filter item
        const selectedTechnology = this.querySelector(".item-text-f").textContent;

        // Filter the portfolio cards based on the selected technology
        portfolioCards.forEach((card) => {
          const portfolioTech = card.querySelector(".portfolio-tech").textContent;

          // Show or hide the card based on the selected technology
          if (portfolioTech.includes(selectedTechnology)) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  });
