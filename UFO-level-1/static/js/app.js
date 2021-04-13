// from data.js
var tableData = data;

// YOUR CODE HERE!
//fn to filter data 
var tbody = d3.select("tbody")

function tableBuild(tableData){

	//check date, clear what is on the pg
	tbody.html("");
	//filter data
	tableData.forEach(d=>{
		const row = tbody.append("tr")
		//loop through each record
		Object.values(d).forEach(value=>{
			let cell = row.append("td")
			cell.text(value)
		});		
	});
}

function click_filter(){

	var date = d3.select("#datetime").property("value");  //pull date entered by user
	var filteredData = tableData
	if (date){  //user has input a date
		filteredData = filteredData.filter(x=>x.datetime===date)	
	}
	tableBuild(filteredData)
};
//event listener to detect click on filter btn
d3.selectAll("#filter-btn").on("click", click_filter);

tableBuild(tableData)