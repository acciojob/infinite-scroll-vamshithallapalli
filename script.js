// Select the list element
const list = document.getElementById("infilist");

// Keep track of how many items are currently in the list
let itemCount = 0;

// Function to add a given number of list items
function addItems(num) {
  for (let i = 0; i < num; i++) {
    itemCount++;
    const li = document.createElement("li");
    li.textContent = `Item ${itemCount}`;
    list.appendChild(li);
  }
}

// Add the first 10 items on page load
addItems(10);

window.addEventListener('scroll', () =>{
	if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 10){
		addItems(2);
	}
})

