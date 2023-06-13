const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const db = new sqlite3.Database('database1.db');

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Initialize the database table
db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS donations (id INTEGER PRIMARY KEY AUTOINCREMENT, amount INTEGER, impact INTEGER)');
});

// Helper function to update the donation amount and impact every minute
function updateDonationValues() {
  db.get('SELECT amount, impact FROM donations ORDER BY id DESC LIMIT 1', (err, row) => {
    if (err) {
      console.error(err);
      return;
    }

    const currentAmount = row ? row.amount : 0;
    const currentImpact = row ? row.impact : 0;
    const newAmount = currentAmount + 1000;
    const newImpact = currentImpact + 10;

    db.run('INSERT INTO donations (amount, impact) VALUES (?, ?)', newAmount, newImpact, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('Donation values updated:', newAmount, newImpact);
    });
  });
}

// Update donation values every minute
setInterval(updateDonationValues, 60000);

// Route for rendering the webpage
app.get('/', (req, res) => {
  db.get('SELECT amount, impact FROM donations ORDER BY id DESC LIMIT 1', (err, row) => {
    if (err) {
      console.error(err);
      return;
    }

    const amountDonation = row ? row.amount : 0;
    const impact = row ? row.impact : 0;
    const milestone = 2000000;
    const progressWidth = (amountDonation / milestone) * 100;

    res.render('index', { amountDonation, impact, milestone, progressWidth });
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
