const usersData = [
  {
    id: 1,
    fullName: "Qafar",
    age: 20,
    isDelete: false
  },
  {
    id: 2,
    fullName: "Ikram",
    age: 31,
    isDelete: false
  },
  {
    id: 3,
    fullName: "Murad",
    age: 26
  },
  {
    id: 4,
    fullName: "Qafar",
    age: 20
  },
  {
    id: 5,
    fullName: "Ikram",
    age: 31
  },
  {
    id: 6,
    fullName: "Murad",
    age: 26
  },
  {
    id: 7,
    fullName: "Qafar",
    age: 20
  },
  {
    id: 8,
    fullName: "Ikram",
    age: 31
  },
  {
    id: 9,
    fullName: "Murad",
    age: 26
  },
  {
    id: 10,
    fullName: "Qafar",
    age: 20
  },
  {
    id: 2,
    fullName: "Ikram",
    age: 31
  },
  {
    id: 3,
    fullName: "Murad",
    age: 26
  },
  {
    id: 1,
    fullName: "Qafar",
    age: 20
  },
  {
    id: 2,
    fullName: "Ikram",
    age: 31
  },
  {
    id: 3,
    fullName: "Murad",
    age: 26
  },
  {
    id: 1,
    fullName: "Qafar",
    age: 20
  },
  {
    id: 2,
    fullName: "Ikram",
    age: 31
  },
  {
    id: 3,
    fullName: "Murad",
    age: 26
  },
  {
    id: 4,
    fullName: "Qafar",
    age: 20
  },
  {
    id: 5,
    fullName: "Ikram",
    age: 31
  },
  {
    id: 6,
    fullName: "Murad",
    age: 26
  },
  {
    id: 7,
    fullName: "Qafar",
    age: 20
  },
  {
    id: 8,
    fullName: "Ikram",
    age: 31
  },
  {
    id: 9,
    fullName: "Murad",
    age: 26
  },
  {
    id: 10,
    fullName: "Qafar",
    age: 20
  },
  {
    id: 2,
    fullName: "Ikram",
    age: 31
  },
  {
    id: 3,
    fullName: "Murad",
    age: 26
  },
  {
    id: 1,
    fullName: "Qafar",
    age: 20
  },
  {
    id: 2,
    fullName: "Ikram",
    age: 31
  },
  {
    id: 3,
    fullName: "Murad",
    age: 26
  }
]



const getAllUsers = (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  const skip = parseInt(req.query.skip) || 0;
  const totalLength = usersData.length;
  let totalPage = Math.ceil(totalLength / limit)
  const filteredData = [...usersData].splice(skip, limit);
  const currentPage = skip / limit + 1;

  res.json({
    message: "user fetch success",
    data: filteredData,
    length: filteredData.length,
    limit,
    totalPage,
    totalData: totalLength,
    currentpage: currentPage,
  })
}



const createUsers = (req, res) => {
  const { age, fullName } = req.body;

  if (!age || !fullName) {
    return res.status(404).json({
      message: "age or fullname empty",
      ok: false
    })
  }


  const newUser = {
    id: usersData.length + 1,
    fullName,
    age
  }
  usersData.push(newUser);


  res.status(201).json({
    message: "new user created successfully",
    ok: true
  })
}


const getSingleUserById = (req, res) => {
  const id = parseInt(req.params.id);
  const foundUser = usersData.find(usr => usr.id === id);

  if (!foundUser && foundUser.isDelete) {
    return res.status(404).json({
      message: 'User notfound',
      ok: false
    })
  }

  res.status(200).json({
    message: "user fetch successfully",
    user: foundUser,
    ok: true
  })

}



const updateUserById = (req, res) => {
  const { age, fullName } = req.body;
  const id = parseInt(req.params.id)



  const foundUser = usersData.find(usr => usr.id === id);

  if (!foundUser && foundUser.isDelete) {
    return res.status(404).json({
      message: 'User notfound',
      ok: false
    })
  }


  foundUser.age = age || foundUser.age;
  foundUser.fullName = fullName || foundUser.fullName;

  res.status(200).json({
    message: "user update successfully",
    ok: true
  })

}



const changeUserById = (req, res) => {

}


const deletUser = (req, res) => {
  const id = parseInt(req.params.id);
  const foundUser = usersData.find(usr => usr.id === id);

  if (!foundUser && foundUser.isDelete) {
    return res.status(404).json({
      message: 'User notfound',
      ok: false
    })
  }


  foundUser.isDelete = true;


  res.status(200).json({
    message: "User delete successfully",
    ok: true
  })
}



module.exports = {
  getAllUsers,
  createUsers,
  getSingleUserById,
  updateUserById,
  changeUserById,
  deletUser
}