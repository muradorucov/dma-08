
const data = [
  {
    id: 1,
    username: "knyaz"
  },
  {
    id: 2,
    username: "fuadcik"
  }
]


const getAllUsers = (req, res) => {
  res.status(200).json(data)
}

const getSingleUserByID = (req, res) => {

  const id = parseInt(req.params.id);
  const foundData = data.find(usr => usr.id === id);

  if (!foundData) {
    return res.status(404).json({
      message: "User not found"
    })
  }

  res.status(200).json(foundData)

}


module.exports = {
  getAllUsers,
  getSingleUserByID
}