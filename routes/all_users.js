const express = require('express');
const router = express.Router();

// Route to display the homepage.ejs file
router.get('/', (req, res) => {
    // Render the 'homepage.ejs' file
    res.render('../views/all_users');
});

module.exports = router;
