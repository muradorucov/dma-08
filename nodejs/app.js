const express = require("express");
const app = express();

let users = [
  {
    id: "1",
    username: "John",
    password: "12345"
  },
  {
    id: "2",
    username: "Jane",
    password: "67890"
  },
  {
    id: "3",
    username: "Doe",
    password: "abcde"
  }
  ,
  {
    id: "4",
    username: "Alice",
    password: "54321"
  }
]


app.get("/users", (req, res) => {
  res.status(200).json({
    message: "Users fetched successfully",
    users: users
  })
})

app.get("/users/:id", (req, res) => {
  const foundUser = users.find(usr => usr.id === req.params.id);
  
  if (!foundUser) {
    return res.status(404).json({
      message: "User notfound"
    })
  }


  res.status(200).json({
    user: foundUser
  })
})

app.listen(3000, () => {
  console.log("Server is run.....");
})