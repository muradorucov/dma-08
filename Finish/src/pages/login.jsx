import React, { useRef } from 'react';
import { login } from '../services';

function Login() {

  const formElem = useRef()



  const formSubmit = async (e) => {
    
    try {
      const data = await login({
        username: formElem.current.username.value,
        password: formElem.current.password.value
      })
      console.log(data);
    } catch (error) {
      alert("username or pass wrong!")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        <form className="flex flex-col gap-4"
          onSubmit={formSubmit}
          ref={formElem}
        >
          <div>
            <label className="block text-sm font-medium mb-1">UserName</label>
            <input
              type="text"
              name='username'
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name='password'
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
              placeholder="********"
            />
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
