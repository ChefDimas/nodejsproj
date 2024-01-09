// Import modules
const express = require('express');
const router = express.Router(); // Create an Express router
const { getUsers } = require('../models/userModel'); // Import your getUsers function

// Define the route for the homepage
router.get('/', (req, res) => {

    res.render('../views/homepage',);
});

module.exports = router;
