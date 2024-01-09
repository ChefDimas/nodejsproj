const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to display a user's profile
router.get('/:id/view', userController.viewProfile);

// Route to display the user edit form
router.get('/:id/edit', userController.editForm);

// Route to handle user edit form submission
router.post('/:id/edit', userController.editUser);

// Route to delete a user
router.get('/:id/delete', userController.deleteUser);

module.exports = router;