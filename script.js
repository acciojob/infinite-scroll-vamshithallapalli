const list = document.getElementById("infi-list");

let itemCount = 0;
let arr = [];

function addItems(num) {
  for (let i = 0; i < num; i++) {
    itemCount++;
    arr.push(itemCount);

    const li = document.createElement("li");
    li.textContent = `Item ${itemCount}`;
    list.appendChild(li);
  }
}

// Initial items
addItems(20);

// Function to attach hover handler to last item
function activateLastItemHover() {
  const lastItem = list.lastElementChild;

  lastItem.onmouseenter = () => {
    addItems(2);
    activateLastItemHover();   // activate hover for NEW last item
  };
}

// Activate hover on first last item
activateLastItemHover();


