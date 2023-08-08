// Get references to DOM elements
const viewMoreButton = document.querySelector('.port-btn');
const filterSection = document.querySelector('.container-f');
const additionalProjects = document.querySelectorAll('.portfolio-card.hidden');
const viewMoreText = viewMoreButton.textContent;

// Function to toggle visibility of filter section and additional projects
function toggleViewMore() {
    if (filterSection.classList.contains('hidden')) {
        filterSection.classList.remove('hidden');
        additionalProjects.forEach(project => project.classList.remove('hidden'));
        viewMoreButton.textContent = 'Show Less';
    } else {
        filterSection.classList.add('hidden');
        additionalProjects.forEach(project => project.classList.add('hidden'));
        viewMoreButton.textContent = viewMoreText;
    }
}

// Add click event listener to "View More" button
viewMoreButton.addEventListener('click', toggleViewMore);
