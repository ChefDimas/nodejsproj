const express = require('express');
const router = express.Router();


const {usersData} = require('../models/userModel');

// Route to display a user's profile
router.get('/:id/view', (req, res) => {
  // Extract user ID from the URL
  const userId = parseInt(req.params.id);

  // Find the user with the specified ID in the user data
  const user = usersData.users.find((user) => user.id === userId);
  console.log(user)

  if (!user) {
    // If user not found, render an error page or redirect
    res.status(404).send('User not found');
    return;
  }

  res.render('userProfile', {user});
});


// Route to display the user edit form
router.get('/:id/edit', (req, res) => {
  // Extract user ID from the URL parameter
  const userId = parseInt(req.params.id);

  // Find the user with the specified ID in the user data
  const user = usersData.users.find((user) => user.id === userId);

  if (!user) {
    // If user not found, render an error page or redirect
    res.status(404).send('User not found');
    return;
  }

  res.render('editUser', {user});

});


// Route to handle user edit form submission
router.post('/:id/edit', (req, res) => {
  // Extract user ID from the URL parameter
  const userId = parseInt(req.params.id);


  // Find the user with the specified ID in the user data
  const user = usersData.users.find((user) => user.id === userId);
  if (!user) {
    // If user not found, render an error page or redirect
    res.status(404).send('User not found');
    return;
  }

  user.name = req.body.name;
  user.surname = req.body.surname;
  user.age = parseInt(req.body.age);



  res.redirect(`/user/${userId}/view`);
});
router.get('/:id/delete', (req, res) => {
  // Extract user ID from the URL
  const userId = parseInt(req.params.id);

  // Find the user with the specified ID in the user data
  const userIndex = usersData.users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    // If user not found, render an error page or redirect
    res.status(404).send('User not found');
    return;
  }

  // Remove the user from the usersData.users array
  usersData.users.splice(userIndex, 1);


  res.redirect('/');
});

module.exports = router;
