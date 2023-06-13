const express = require('express');
const XLSX = require('xlsx');
const app = express();
const ejs = require('ejs');
const path = require('path');


app.set('view engine', 'ejs'); // Set the view engine to EJS
app.set('views', path.join(__dirname, 'views')); // Set the views directory (create a 'views' folder in your project directory)

app.use(express.static("public"));
app.get('/data', (req, res) => {
  const workbook = XLSX.readFile('Book1.xlsx'); // Replace with the actual path to your Excel file

  const worksheetName = workbook.SheetNames[0]; // Assume the data is in the first sheet
  const worksheet = workbook.Sheets[worksheetName];

  const jsonData = XLSX.utils.sheet_to_json(worksheet);

  res.render('index', { data: jsonData }); // Render the 'index' template and pass the data as a variable
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
