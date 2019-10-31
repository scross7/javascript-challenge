// from data.js
var tableData = data;
let tbody = d3.select("tbody");

// YOUR CODE HERE!
// Select the submit button
const submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Clear any existing entries
  tbody.html("");

  // Select the input element and get the raw HTML node
  const date = d3.select("#datetime").property("value");
  const city = d3.select("#city").property("value");
  const state = d3.select("#state").property("value");
  const country = d3.select("#country").property("value");
  const shape = d3.select("#shape").property("value");

  const allInput = [date, city, state, country, shape]
  const input = []
  
  for (allInput) {
    if (allInput != "") {
      input.push(allInput)
    };
  };

  console.log(input)

  // Get the value property of the input element
  const filteredData = tableData.filter(day => 
    day.datetime === date
    && day.city === city
    && day.state === state
    && day.country === country
    && day.shape === shape
    );
  
  // console.log(filteredData);

  filteredData.forEach(ufo => {
    const row = tbody.append("tr");
    for (key in ufo){
        const cell = tbody.append("td");
        cell.text(ufo[key]);
    }; 
});

});