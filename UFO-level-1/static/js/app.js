// from data.js
var tableData = data;
let tbody = d3.select("tbody");

// YOUR CODE HERE!
// Select the submit button
const submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  const inputElement = d3.select("#datetime");

  // Get the value property of the input element
  const inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  const filteredData = tableData.filter(day => day.datetime === inputValue);
  
  console.log(filteredData);

  filteredData.forEach(ufo => {
    const row = tbody.append("tr");
    for (key in ufo){
        const cell = tbody.append("td");
        cell.text(ufo[key]);
    }; 
});

});

