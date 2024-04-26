// Get all tab buttons and tab contents
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

// Add click event listener to each tab button
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'active' class from all tab buttons and tab contents
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Add 'active' class to the clicked tab button and corresponding tab content
    const tabId = button.getAttribute('data-tab');
    const tabContent = document.getElementById(tabId);
    button.classList.add('active');
    tabContent.classList.add('active');
  });
});
