const express = require('express');
const sequelize = require('./db');
const User = require('./models/User');

const app = express();
const PORT = 3000;

app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, async () => {
    try {
        await sequelize.sync();
        console.log(`Server running at http://localhost:${PORT}`);
    } catch (error) {
        console.error('Database connection failed:', error);
    }
});