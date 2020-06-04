// Load data.js into table
var tableData = data;
var tbody = d3.select("tbody")
tableData.forEach(function(ufo) {
//   console.log(ufo);aaa
  var row = tbody.append("tr");
  Object.entries(ufo).forEach(function([key, value]) {
    // console.log(key, value);aaa
    var cell = row.append("td");
    cell.text(value);				
  });
});

// Create button variable and create function to grab date and filter
var button = d3.select("#filter-btn");

button.on("click", function() {
// delete all rows before appending filtered data by the filtered date    
  var x = d3.select(".tableid");
  x.selectAll("td").remove();  

  var inputElement = d3.select(".form-control");
  var inputValue = inputElement.property("value");
  var filteredData = tableData.filter(ufoData => ufoData.datetime === inputValue);
 
  var tbody = d3.select("tbody");

  filteredData.forEach(function(newDate) {
    var row = tbody.append("tr");
    Object.entries(newDate).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);				
    });
  });
});


// Create button variable to reload full data
var button = d3.select("#full-btn");

button.on("click", function() {
    // delete all rows before appending filtered data by the filtered date    
      var x = d3.select(".tableid");
      x.selectAll("td").remove(); 

    var tableData = data;
    var tbody = d3.select("tbody")
    tableData.forEach(function(ufo) {
//   console.log(ufo);aaa
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(function([key, value]) {
    // console.log(key, value);aaa
        var cell = row.append("td");
        cell.text(value);				
  });
});
});