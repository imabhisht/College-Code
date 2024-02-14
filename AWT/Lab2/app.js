const express = require('express');
const cookieParser = require('cookie-parser');
const serveIndex = require('serve-index');
const path = require('path');
const app = express();
const port = 3005;

// Middleware to parse cookies
app.use(cookieParser());

// Middleware to log request information
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next();
});

// Middleware to serve directory listing
app.use('/public', serveIndex(path.join(__dirname, 'public'), { icons: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    // Check if the user has a cookie named 'username'
    if (req.cookies.username) {
        res.send(`Hello ${req.cookies.username}!`);
    } else {
        res.send('Hello World! Set your username.');
    }
});

app.get('/about', (req, res) => res.send('About Page'));
app.get('/contact', (req, res) => res.send('Contact Page'));

app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    res.send(`Form submitted successfully: Name - ${name}, Email - ${email}, Message - ${message}`);
});

app.post('/setUsername', (req, res) => {
    const { username } = req.body;
    // Set a cookie named 'username' with the provided value
    res.cookie('username', username, { maxAge: 900000, httpOnly: true });
    res.send(`Username set successfully: ${username}`);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
