const express = require('express');
const router = express.Router();
const { getUsers } = require('../models/userModel'); // Import your getUsers function

const users = getUsers(); // Call your getUsers function

// Route to display the index.ejs file
router.get('/', (req, res) => {
    // Render the 'index.ejs' file
    res.render('../views/index', {users});
});

module.exports = router;
