const express = require('express');
const router = express.Router();
const upload = require('../controllers/multerConfig')

const {usersData} = require('../models/userModel');

// Route to display the form for adding a new user
router.get('/', (req, res) => {
  res.render('addUser');
});

// Route to handle form submission for adding a new user
router.post('/', upload.single('photo') ,(req, res) => {
  // Extract user data from the form input values
  const { name, surname, age } = req.body;

  // Generate a unique ID for the new user
  const lastElement = usersData.users[usersData.users.length - 1];
  const newUserId = lastElement["id"] + 1;
  console.log(usersData.users)

  // Create a new user object
  const newUser = {
    id: newUserId,
    name: name,
    surname: surname,
    age: parseInt(age),
    photo: req.file ? req.file.filename : undefined,
  };

  // Add the new user to your data source (e.g., usersData.users)
  usersData.users.push(newUser);
  console.log(usersData.users)

  res.redirect('/all');
});

module.exports = router;
