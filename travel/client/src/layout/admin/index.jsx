import { useState } from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { Outlet } from "react-router";


export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar open={sidebarOpen} />

      <div className="flex flex-col flex-1">
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className="p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
