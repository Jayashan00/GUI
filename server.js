const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const db = new sqlite3.Database('./project.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database.');
  }
});

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'assets')));

// Create table if not exists
db.run(
  `CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    event_name TEXT NOT NULL,
    date TEXT NOT NULL,
    venue TEXT NOT NULL,
    description TEXT NOT NULL,
    num_guest INTEGER NOT NULL,
    image TEXT,
    category TEXT NOT NULL
  )`,
  (err) => {
    if (err) {
      console.error('Error creating table:', err.message);
    } else {
      console.log('Events table created successfully.');
    }
  }
);

// Fetch all events
app.get('/api/events', (req, res) => {
  const query = `SELECT id, event_name AS title, description, date, venue, num_guest, image, category FROM events`;
  db.all(query, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Fetch events by category with a limit (e.g., 15 events for wedding)
app.get('/api/events/:category', (req, res) => {
  const category = req.params.category;
  const limit = 15;  // Limit the number of events displayed
  const query = `SELECT id, event_name AS title, description, date, venue, num_guest, image, category FROM events WHERE category = ? LIMIT ?`;
  db.all(query, [category, limit], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Fetch event details by ID
app.get('/api/event/:id', (req, res) => {
  const id = req.params.id;
  const query = `SELECT id, event_name AS title, description, date, venue, num_guest, image FROM events WHERE id = ?`;
  db.get(query, [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!row) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json(row);
  });
});

// Add a new event
app.post('/api/events', (req, res) => {
  const { event_name, date, venue, description, num_guest, image, category } = req.body;
  const query = `INSERT INTO events (event_name, date, venue, description, num_guest, image, category) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  const values = [event_name, date, venue, description, num_guest, image, category];
  db.run(query, values, function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: this.lastID, message: 'Event added successfully!' });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
