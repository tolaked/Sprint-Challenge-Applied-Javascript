// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    response.data.articles["javascript"].forEach(article => {
      let newCard = articleCard(
        article.headline,
        article.authorPhoto,
        article.authorName
      );
      largeContainer.appendChild(newCard);
    });
    response.data.articles["bootstrap"].forEach(article => {
      let newCard = articleCard(
        article.headline,
        article.authorPhoto,
        article.authorName
      );
      largeContainer.appendChild(newCard);
    });
    response.data.articles["technology"].forEach(article => {
      let newCard = articleCard(
        article.headline,
        article.authorPhoto,
        article.authorName
      );
      largeContainer.appendChild(newCard);
    });
    response.data.articles["jquery"].forEach(article => {
      let newCard = articleCard(
        article.headline,
        article.authorPhoto,
        article.authorName
      );
      largeContainer.appendChild(newCard);
    });
    response.data.articles["node"].forEach(article => {
      let newCard = articleCard(
        article.headline,
        article.authorPhoto,
        article.authorName
      );
      largeContainer.appendChild(newCard);
    });
    console.log(response.data);
  });

function articleCard(headline, imgUrl, authorsName) {
  let topDiv = document.createElement("div");
  topDiv.classList.add("card");

  let Div1 = document.createElement("div");
  Div1.classList.add("headline");

  let Div2 = document.createElement("div");
  Div2.classList.add("author");

  let Div3 = document.createElement("div");
  Div3.classList.add("img-container");
  let image = document.createElement("img");
  image.setAttribute("src");
  Div3.appendChild(image);

  let span = document.createElement("span");

  Div2.appendChild(Div3);
  Div2.appendChild(span);

  topDiv.appendChild(Div1);
  topDiv.appendChild(Div2);

  return topDiv;
}
