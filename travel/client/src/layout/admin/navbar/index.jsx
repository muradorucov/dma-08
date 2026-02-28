import { useState } from "react";
import ProfilePopup from "../logout";

export default function Navbar({ toggleSidebar }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="h-14 bg-white shadow flex items-center justify-between px-4">
      <button
        onClick={toggleSidebar}
        className="text-gray-700 font-bold"
      >
        ☰
      </button>

      <div className="relative">
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-9 h-9 rounded-full cursor-pointer"
          onClick={() => setOpen(!open)}
        />

        {open && <ProfilePopup />}
      </div>
    </header>
  );
}
