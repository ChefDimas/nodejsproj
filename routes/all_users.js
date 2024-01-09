// Import modules
const express = require('express');
const router = express.Router(); // Create an Express router
const { getUsers } = require('../models/userModel'); // Import your getUsers function

// Define the route for the homepage
router.get('/', (req, res) => {
    const users = getUsers(); // Get the user data

    res.render('../views/all_users', { users });
});

module.exports = router;
