const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// public folder ke andar ki static files (CSS, JS) ko serve karne ke liye
app.use(express.static(path.join(__dirname, 'public')));

// Main route jo HTML page load karega
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 🚀 HEALTH CHECK ENDPOINT
app.get('/health', (req, res) => {
   res.status(200).send('OK');
});

// Server start karne ke liye (Added '0.0.0.0' for Docker compatibility)
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT} across all interfaces`);
});