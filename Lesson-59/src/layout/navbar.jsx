import React from "react";
import { logout } from "../services/auth";
import { useNavigate } from "react-router";

function Navbar() {
  const navigate = useNavigate()


  const logoutUser = async () => {
    try {
      await logout()
      navigate("/login")

    } catch (error) {
      alert(error.response.data.message)
    }
  }
  return (
    <nav className="w-full h-14 bg-white shadow flex items-center justify-between px-6 border-b border-gray-200">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-md bg-[#661BDC] flex items-center justify-center text-white font-bold text-lg">
          1K
        </div>
        <span className="text-gray-800 font-semibold">Admin Panel</span>
      </div>

      <div className="flex items-center gap-5">
        <button className="text-gray-600 hover:text-[#661BDC] transition text-sm font-medium">
          Settings
        </button>
        <button className="text-gray-600 hover:text-[#661BDC] transition text-sm font-medium">
          Profile
        </button>
        <button className="text-sm font-medium text-white bg-[#661BDC] px-3 py-1.5 rounded-lg hover:brightness-110 transition"
          onClick={logoutUser}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
