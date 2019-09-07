/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let allImages;
let currentIndex;

function carouselComp() {
  let index = 0;
  let images = ["mountains", "computer", "trees", "turntable"];

  let firstImage = document.createElement("img");
  firstImage.style.display = "block";
  firstImage.src = `./assets/carousel/${images[index]}.jpeg`;

  let seconDiv = document.createElement("div");
  seconDiv.classList.add("left-button");
  seconDiv.addEventListener("click", () => {
    index -= 1;
    if (index < 0) {
      index = images.length - 1;
    }
    firstImage.src = `./assets/carousel/${images[index]}.jpeg`;
  });

  let thirDiv = document.createElement("div");
  thirDiv.classList.add("right-button");

  thirDiv.addEventListener("click", () => {
    index += 1;
    if (index >= images.length) index = 0;
    firstImage.src = `./assets/carousel/${images[index]}.jpeg`;
    console.log(firstImage.src);
  });

  let topDiv = document.createElement("div");
  topDiv.classList.add("carousel");

  let allElements = [seconDiv, thirDiv, firstImage];

  allElements.map(element => topDiv.appendChild(element));

  return topDiv;
}
const imgCrad = carouselComp();

const bigcontainer = document.querySelector(".carousel-container");

bigcontainer.appendChild(imgCrad);
console.log(bigcontainer);
