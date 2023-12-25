let usersData = {
  users: [
    {
      "id": 1,
      "name": "Peter",
      "surname": "Parker",
      "age": 28,
      "photo": "user1.jpg",
    },
    {
      "id": 2,
      "name": "Tony",
      "surname": "Stark",
      "age": 45,
      "photo": "user2.jpg",
    },
    {
      "id": 3,
      "name": "Steve",
      "surname": "Rogers",
      "age": 100,
      "photo": "user3.jpg",
    },
    {
      "id": 4,
      "name": "Natasha",
      "surname": "Romanoff",
      "age": 34,
      "photo": "user4.jpg",
    },
    {
      "id": 5,
      "name": "Bruce",
      "surname": "Banner",
      "age": 40,
      "photo": "user5.jpg",
    }
  ]
}

function getUsers() {
  return usersData.users;
}

function getUser(id) {
  return usersData.users.find((user) => user.id === id);
}

module.exports = {
  getUsers,
  getUser,
  usersData,
};