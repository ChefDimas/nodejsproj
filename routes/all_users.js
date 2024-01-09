const express = require('express');
const router = express.Router();

// Route to display the homepage.ejs file
router.get('/', (req, res) => {
    // Render the 'homepage.ejs' file
    res.render('homepage');
});

module.exports = router;
