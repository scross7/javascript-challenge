// from data.js
var tableData = data;
let tbody = d3.select("tbody");

// YOUR CODE HERE!
// Select the submit button
const submit = d3.select("#filter-btn");

submit.on("click", function () {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Clear any existing entries
  tbody.html("");

  // Select the input element and get the raw HTML node
  const allInput = []
  const date = d3.select("#datetime").property("value");
  const city = d3.select("#city").property("value");
  const state = d3.select("#state").property("value");
  const country = d3.select("#country").property("value");
  const shape = d3.select("#shape").property("value");

  // Filter data by non-null input values only
  const filteredData = tableData
    .filter(obj => {
      return date === "" || obj.datetime === date;
    })
    .filter(obj => {
      return city === "" || obj.city === city;
    })
    .filter(obj => {
      return state === "" || obj.state === state;
    })
    .filter(obj => {
      return country === "" || obj.country === country;
    })
    .filter(obj => {
      return shape === "" || obj.shape === shape;
    })

  // If all input values are null, return no results message
  if (date === "" && city === "" && state === "" && country === "" && shape === "") {
    const row = tbody.append("tr");
    const cell = tbody.append("td");
    cell.text("your search did not return any results");
  }

  // Otherwise, display filtered data
  else {
    filteredData.forEach(ufo => {
      const row = tbody.append("tr");
      for (key in ufo) {
        const cell = tbody.append("td");
        cell.text(ufo[key])
      };

    });
    };



});