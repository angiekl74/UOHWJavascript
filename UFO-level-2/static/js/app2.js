
var tableData = data;
var tbody = d3.select("tbody")

// Function to load any dataset to table
function showTableData(x) {
  tbody.html("")
  x.forEach(function(ufo) {
      var row = tbody.append("tr")
      Object.entries(ufo).forEach(function([key,value]) {
          var cell = row.append("td")
          cell.text(value);
      });
  });
};
showTableData(tableData);

// Button to reload initial dataset if user wants to
var button = d3.select("#full-btn");
button.on("click", function() {
  showTableData(tableData);
});

// Button to clear input
var button = d3.select("#clear-btn");
button.on("click", function() {
  document.getElementById('datetime').value = '';
  document.getElementById('state').value = '';
  document.getElementById('country').value = '';
  finalFilter.length = 0;
  inputValueDate2.length = 0;
  inputValueState2.length = 0;
  inputValueCountry2.length = 0;
  
});

// Find filtered data
var button = d3.select("#filter-btn");
var finalFilter = []
var inputValueDate2 = []
var inputValueState2 = []
var inputValueCountry2 = []

button.on("click", function() {
  if (inputValueDate !== "") {
    var inputElement = d3.select("#datetime");
    var inputValueDate = inputElement.property("value").toLowerCase();
    finalFilter.push(inputValueDate);
    inputValueDate2.push(inputValueDate);
  }
  if (inputValueState !== "") {
    var inputElement2 = d3.select("#state");
    var inputValueState = inputElement2.property("value").toLowerCase();
    finalFilter.push(inputValueState);
    inputValueState2.push(inputValueState);
  }
  if (inputValueCountry !== "") {
    var inputElement3 = d3.select("#country");
    var inputValueCountry = inputElement3.property("value").toLowerCase();
    finalFilter.push(inputValueCountry);
    inputValueCountry2.push(inputValueCountry);
  };
  console.log("input's filter", finalFilter);
  f2 = finalFilter.filter(word => word !== "");
  // console.log("f2 filter", f2);
  // console.log( "date value", inputValueDate2 );
  // console.log( "state value", inputValueState2 );
  // console.log( "country value", inputValueCountry2 );

  // 3 Filters code 
  if (f2.length > 2){
    var xy = tableData.filter((person) => f2.includes(person.datetime) &&
                                          f2.includes(person.state) &&
                                          f2.includes(person.country));
    // console.log(xy);
    showTableData(xy);      
  }
  // 2 filter code
  else if (f2.length === 2) {
    if (inputValueDate2[0] !== "" && inputValueState2[0] !== "")  {
      var xy = tableData.filter((person) => f2.includes(person.datetime) &&
                                            f2.includes(person.state));
    showTableData(xy); 
    }
    else if (inputValueDate2[0] !== "" && inputValueCountry2[0] !== "") {
      var xy = tableData.filter((person) => f2.includes(person.datetime) &&
                                            f2.includes(person.country));
    showTableData(xy);
    }
    else if (inputValueState2[0] !== "" && inputValueCountry2[0] !== "") {
      var xy = tableData.filter((person) => f2.includes(person.state) &&
                                            f2.includes(person.country));
    showTableData(xy);  
    }
  }
  // Single filter code (it works) starts here
  else {
    if (f2[0] === inputValueDate2[0]){
      var xy = tableData.filter((person) => inputValueDate2.includes(person.datetime));
      showTableData(xy);
    }
    else if ((f2[0] === inputValueState2[0] )){
      var xy = tableData.filter((person) => inputValueState2.includes(person.state));
      showTableData(xy);
    }
    else if ((f2[0] === inputValueCountry2[0] )){
      var xy = tableData.filter((person) => inputValueCountry2.includes(person.country));
      showTableData(xy);
    }

  } 
  
});
  




