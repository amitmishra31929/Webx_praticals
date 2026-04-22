// Import modules
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// Middleware
app.use(cookieParser());

// ==========================================
// ROOT ROUTE (Front Page)
// ==========================================
app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to Cookie App</h1>
        <p><a href="/set-cookie">Set Cookie</a></p>
        <p><a href="/get-cookie">Get Cookie</a></p>
        <p><a href="/clear-cookie">Clear Cookie</a></p>
    `);
});

// ==========================================
// SET COOKIE
// ==========================================
app.get('/set-cookie', (req, res) => {
    res.cookie('examStatus', 'In Progress', {
        maxAge: 60000,
        httpOnly: true
    });

    console.log('Cookie SET: examStatus = In Progress');

    res.send('Cookie has been set! Check your terminal.');
});

// ==========================================
// GET COOKIE
// ==========================================
app.get('/get-cookie', (req, res) => {
    const myCookie = req.cookies.examStatus;

    if (myCookie) {
        console.log(`Cookie RECEIVED: ${myCookie}`);
        res.send(`Cookie value: ${myCookie}`);
    } else {
        console.log('No cookie found');
        res.send('No cookie found or it expired.');
    }
});

// ==========================================
// CLEAR COOKIE
// ==========================================
app.get('/clear-cookie', (req, res) => {
    res.clearCookie('examStatus');

    console.log('Cookie CLEARED');

    res.send('Cookie has been cleared!');
});

// Start server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
//nmp install express cookie-parser
// To run: node app.js
// nmp install -g typescript
