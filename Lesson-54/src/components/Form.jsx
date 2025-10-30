import { motion } from "framer-motion";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
function Form({ setUsers, users }) {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: ""
  })

  const inputHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const formSubmit = (e) => {
    e.preventDefault();
    setUsers([
      ...users,
      {
        ...formData,
        id: uuidv4(),
      }
    ])

  }

  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="p-10 bg-linear-to-br from-indigo-500 to-indigo-700 text-white flex flex-col justify-center"
    >
      <h2 className="text-3xl font-bold mb-6">Add New User</h2>
      <form className="flex flex-col space-y-5"
        onSubmit={formSubmit}>
        <div>
          <label className="text-sm font-medium">Full Name</label>
          <input
            type="text"
            name="fullName"
            onChange={inputHandler}
            placeholder="Enter full name"
            className="mt-1 w-full p-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/80 transition"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            onChange={inputHandler}
            placeholder="Enter email"
            className="mt-1 w-full p-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/80 transition"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            onChange={inputHandler}
            placeholder="Enter password"
            className="mt-1 w-full p-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/80 transition"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 bg-white text-indigo-700 font-semibold py-3 rounded-xl shadow-md hover:bg-indigo-100 transition"
        >
          Submit
        </motion.button>
      </form>
    </motion.div>
  )
}

export default Form