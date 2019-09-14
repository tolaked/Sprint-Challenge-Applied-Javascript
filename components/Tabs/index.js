// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicContainer = document.querySelector(".topics");

axios
  .get(`https://lambda-times-backend.herokuapp.com/topics`)
  .then(response => {
    // Remember response is an object, response.data is an array.
    let topicsTabs = response.data.topics;

    topicsTabs.forEach(topic => {
      let newTabs = allTbas();
      newTabs.textContent = topic;
      topicContainer.appendChild(newTabs);
    });
    console.log(topicContainer);
  })
  .catch(error => {
    console.log("Error:", error);
  });

function allTbas() {
  let newDiv = document.createElement("div");
  newDiv.classList.add("tab");

  newDiv.addEventListener("click", () => {
    newDiv.classList.toggle("active-tab");
  });

  return newDiv;
}
