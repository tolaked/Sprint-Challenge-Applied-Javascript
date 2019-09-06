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
  let topDiv = document.createElement("div");
  topDiv.classList.add("carousel");

  let seconDiv = document.createElement("div");
  seconDiv.classList.add("left-button");

  let firstImage = document.createElement("img");
  firstImage.setAttribute("src", "./assets/carousel/mountains.jpeg");

  let secondImage = document.createElement("img");
  secondImage.setAttribute("src", "./assets/carousel/computer.jpeg");

  let thirdImage = document.createElement("img");
  thirdImage.setAttribute("src", "./assets/carousel/trees.jpeg");

  let fourtImage = document.createElement("img");
  fourtImage.setAttribute("src", "./assets/carousel/trees.jpeg");

  let thirDiv = document.createElement("div");
  thirDiv.classList.add("right-button");

  allImages = [firstImage, secondImage, thirdImage, fourtImage];
  allImages.forEach((element, index) => {
    seconDiv.addEventListener("click", () => {
      if ((element.style.display = "none")) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    });
  });

  let allElements = [seconDiv, firstImage, thirdImage, fourtImage, thirDiv];

  allElements.map(element => topDiv.appendChild(element));

  return topDiv;
}
const imgCrad = carouselComp();

const bigcontainer = document.querySelector(".carousel-container");

bigcontainer.appendChild(imgCrad);
console.log(bigcontainer);
