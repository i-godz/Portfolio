// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', function() {
    // Get the header elements
    var primaryHeader = document.querySelector('.header_primaryHeader__RmsL9');
    var copyHeader = document.querySelector('.header_copy_header__Tms8U');
  
    // Get the navigation links in the primary header
    var primaryLinks = primaryHeader.querySelectorAll('nav a');
  
    // Add click event listeners to the primary navigation links
    primaryLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        var target = link.getAttribute('href'); // Get the target section's ID
        scrollToSection(target); // Scroll to the target section
      });
    });
  
    // Get the navigation links in the copy header
    var copyLinks = copyHeader.querySelectorAll('nav a');
  
    // Add click event listeners to the copy navigation links
    copyLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        var target = link.getAttribute('href'); // Get the target section's ID
        scrollToSection(target); // Scroll to the target section
      });
    });
  
    // Function to scroll to a section
    function scrollToSection(target) {
      var section = document.querySelector(target);
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth' // Scroll smoothly to the section
        });
      }
    }
  });
  