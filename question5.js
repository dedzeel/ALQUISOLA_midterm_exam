const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const port = 3000;

// Connect to MySQL database
const sequelize = new Sequelize('database_name', 'root', 'yourpassword', {
    host: 'localhost',
    dialect: 'mysql'
});

// Define User model
const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false }
}, { timestamps: false });

// Route to fetch all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected.');
    } catch (error) {
        console.error('Database connection error:', error);
    }
    console.log(`Server running at http://localhost:${port}`);
});
