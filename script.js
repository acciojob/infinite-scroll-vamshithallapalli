// Select the list element
const list = document.getElementById("list");

// Keep track of how many items are currently in the list
let itemCount = 0;

// Function to add a given number of list items
function addItems(num) {
  for (let i = 0; i < num; i++) {
    itemCount++;
    const li = document.createElement("li");
    li.textContent = `List Item ${itemCount}`;
    list.appendChild(li);
  }
}

// Add the first 10 items on page load
addItems(10);

// Detect when the user scrolls to the bottom of the page
window.addEventListener("scroll", () => {
  // When user is near bottom of the page
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
    addItems(2); // Add 2 more items automatically
  }
});
