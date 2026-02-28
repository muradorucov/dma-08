import { NavLink } from "react-router-dom";

export default function Sidebar({ open }) {
  return (
    <aside
      className={`bg-gray-900 text-white transition-all duration-300 ${open ? "w-64" : "w-0"
        } overflow-hidden`}
    >
      <div className="p-4 text-xl font-bold border-b border-gray-700">
        Admin
      </div>

      <nav className="flex flex-col gap-2 p-4">
        <NavLink to="/admin" className="hover:bg-gray-800 p-2 rounded">
          Dashboard
        </NavLink>
        <NavLink to="contacts" className="hover:bg-gray-800 p-2 rounded">
          Contacts
        </NavLink>
        <NavLink to="tours" className="hover:bg-gray-800 p-2 rounded">
          Tours
        </NavLink>
      </nav>
    </aside>
  );
}
