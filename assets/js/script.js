// 'use strict';

// Utility function to toggle the "active" class on an element
const elementToggleFunc = (elem) => elem.classList.toggle("active");

// Sidebar variables and functionality
const sidebar = document.querySelector("[data-sidebar]"); // Sidebar element
const sidebarBtn = document.querySelector("[data-sidebar-btn]"); // Button to toggle sidebar

// Add event listener to the sidebar button to toggle the sidebar visibility
sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));

// Testimonials modal variables and functionality
const testimonialsItems = document.querySelectorAll("[data-testimonials-item]"); // List of testimonial items
const modalContainer = document.querySelector("[data-modal-container]"); // Modal container element
const modalCloseBtn = document.querySelector("[data-modal-close-btn]"); // Button to close the modal
const overlay = document.querySelector("[data-overlay]"); // Overlay element behind the modal

// Modal content variables
const modalImg = document.querySelector("[data-modal-img]"); // Image in the modal
const modalTitle = document.querySelector("[data-modal-title]"); // Title in the modal
const modalText = document.querySelector("[data-modal-text]"); // Text in the modal

// Function to toggle the modal and overlay visibility
const toggleModal = () => {
  elementToggleFunc(modalContainer); // Toggle modal visibility
  elementToggleFunc(overlay); // Toggle overlay visibility
};

// Add click event listener to each testimonial item
testimonialsItems.forEach(item => {
  item.addEventListener("click", () => {
    // Update modal content based on the clicked testimonial
    modalImg.src = item.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = item.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = item.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = item.querySelector("[data-testimonials-text]").innerHTML;
    toggleModal(); // Show the modal
  });
});

// Add click event listener to the modal close button and overlay to hide the modal
modalCloseBtn.addEventListener("click", toggleModal);
overlay.addEventListener("click", toggleModal);

// Custom select functionality variables
const select = document.querySelector("[data-select]"); // Custom select element
const selectItems = document.querySelectorAll("[data-select-item]"); // List of select options
const selectValue = document.querySelector("[data-select-value]"); // Display value of the selected option
const filterBtns = document.querySelectorAll("[data-filter-btn]"); // List of filter buttons

// Add click event listener to the custom select element to toggle its visibility
select.addEventListener("click", () => elementToggleFunc(select));

// Add click event listener to each select option
selectItems.forEach(item => {
  item.addEventListener("click", () => {
    const selectedValue = item.innerText.toLowerCase(); // Get the selected option value
    selectValue.innerText = item.innerText; // Update the displayed value
    elementToggleFunc(select); // Hide the select options
    filterFunc(selectedValue); // Apply the filter based on the selected value
  });
});

// Filter functionality variables
const filterItems = document.querySelectorAll("[data-filter-item]"); // List of filterable items

// Function to filter items based on the selected value
const filterFunc = (selectedValue) => {
  filterItems.forEach(item => {
    // Show or hide items based on the selected value
    if (selectedValue === "all" || selectedValue === item.dataset.category) {
      item.classList.add("active"); // Show item
    } else {
      item.classList.remove("active"); // Hide item
    }
  });
};

// Track the last clicked filter button for styling
let lastClickedBtn = filterBtns[0];

// Add click event listener to each filter button
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const selectedValue = btn.innerText.toLowerCase(); // Get the selected filter value
    selectValue.innerText = btn.innerText; // Update the displayed value
    filterFunc(selectedValue); // Apply the filter
    lastClickedBtn.classList.remove("active"); // Remove active class from the last clicked button
    btn.classList.add("active"); // Add active class to the current clicked button
    lastClickedBtn = btn; // Update the last clicked button
  });
});

// Contact form functionality variables
const form = document.querySelector("[data-form]"); // Contact form element
const formInputs = document.querySelectorAll("[data-form-input]"); // List of form input fields
const formBtn = document.querySelector("[data-form-btn]"); // Submit button of the form

// Add input event listener to each form input field
formInputs.forEach(input => {
  input.addEventListener("input", () => {
    formBtn.disabled = !form.checkValidity(); // Enable/disable the submit button based on form validity
  });
});

// Page navigation functionality variables
const navigationLinks = document.querySelectorAll("[data-nav-link]"); // List of navigation links
const pages = document.querySelectorAll("[data-page]"); // List of page sections

// Add click event listener to each navigation link
navigationLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    // Remove 'active' class from all navigation links
    navigationLinks.forEach(navLink => navLink.classList.remove("active"));

    // Remove 'active' class from all pages
    pages.forEach(page => page.classList.remove("active"));

    // Add 'active' class to the clicked link
    link.classList.add("active");

    // Show the corresponding page
    const pageToShow = Array.from(pages).find(page => page.dataset.page === link.innerHTML.toLowerCase());
    if (pageToShow) {
      pageToShow.classList.add("active");
    }

    window.scrollTo(0, 0); // Scroll to the top of the page
  });
});

'use strict';

// Function to toggle dark mode
const toggleDarkMode = () => {
  const currentTheme = document.body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
};

// Check for saved theme in localStorage and apply it
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.setAttribute('data-theme', savedTheme);
}

// Add event listener to the dark mode toggle button
const darkModeToggle = document.getElementById('dark-mode-toggle');
if (darkModeToggle) {
  darkModeToggle.addEventListener('click', toggleDarkMode);
}

