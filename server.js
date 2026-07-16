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

// 🚀 HEALTH CHECK ENDPOINT (Auto-Rollback aur CI/CD ke liye)
app.get('/health', (req, res) => {
    res.status(200).json({
        status: "ERROR",
        message: "Manually triggered failure for rollback test"
    });
});

// Server start karne ke liye
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});