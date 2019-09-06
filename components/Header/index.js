// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
  let topDiv = document.createElement("div");
  topDiv.classList.add("header");

  let span = document.createElement("span");
  span.classList.add("date");
  span.textContent = "SMARCH 28,2019";

  let heading = document.createElement("h1");
  heading.textContent = "Lambda Times";

  let span2 = document.createElement("span");
  span2.classList.add("temp");
  span2.textContent = "98°";

  let allElements = [span, heading, span2];
  allElements.map(element => topDiv.appendChild(element));

  return topDiv;
}

const container = document.querySelector(".header-container");
let card = Header();
container.appendChild(card);
