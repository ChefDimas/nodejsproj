const express = require('express');
const router = express.Router();
const { getUsers } = require('../models/userModel');

const users = getUsers(); // Call your getUsers function

// Route to display all users
router.get('/', (req, res) => {
    // Render the 'listUsers.ejs' file
    res.render('../views/listUsers', {users});
});

module.exports = router;
