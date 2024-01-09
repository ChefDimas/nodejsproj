const express = require('express');
const router = express.Router();

// Route to display the index.ejs file
router.get('/', (req, res) => {
    // Render the 'index.ejs' file
    res.render('../views/index');
});

module.exports = router;
