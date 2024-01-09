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
    },
    {
      "id": 6,
      "name": "Thor",
      "surname": "Odinson",
      "age": 1500,
      "photo": "user6.jpg",
    },
    {
      "id": 7,
      "name": "Clint",
      "surname": "Barton",
      "age": 35,
      "photo": "user7.jpg",
    },
    {
      "id": 8,
      "name": "Wanda",
      "surname": "Maximoff",
      "age": 30,
      "photo": "user8.jpg",
    },
    {
      "id": 9,
      "name": "Vision",
      "surname": "",
      "age": 5,
      "photo": "user9.jpg",
    },
    {
      "id": 10,
      "name": "Scott",
      "surname": "Lang",
      "age": 40,
      "photo": "user10.jpg",
    },
    {
      "id": 11,
      "name": "Carol",
      "surname": "Danvers",
      "age": 35,
      "photo": "user11.jpg",
    },
    {
      "id": 12,
      "name": "T'Challa",
      "surname": "",
      "age": 35,
      "photo": "user12.jpg",
    },
    {
      "id": 13,
      "name": "Stephen",
      "surname": "Strange",
      "age": 42,
      "photo": "user13.jpg",
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