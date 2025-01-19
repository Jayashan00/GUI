const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./events.db');

// Print the table structure and data
db.serialize(() => {
    console.log('Tables in database:');
    db.each("SELECT name FROM sqlite_master WHERE type='table'", (err, row) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log(row.name);
        }
    });

    console.log('\nContents of events table:');
    db.all("SELECT * FROM events", [], (err, rows) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log(rows);
        }
    });
});

// Close the database
db.close();
