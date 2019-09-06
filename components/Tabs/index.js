// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const bigContainer = document.querySelector(".header-container");

axios
  .get(`https://lambda-times-backend.herokuapp.com/topics`)
  .then(response => {
    // Remember response is an object, response.data is an array.
    let topicsTabs = response.data.topics;

    let newTabs = allTbas();
    topicsTabs.forEach(topic => {
      let h1 = document.createElement("h1");
      h1.textContent = topic;
      newTabs.appendChild(h1);
    });
    bigContainer.appendChild(newTabs);
  })
  .catch(error => {
    console.log("Error:", error);
  });

function allTbas() {
  let newDiv = document.createElement("div");
  newDiv.classList.add("tab");

  return newDiv;
}
