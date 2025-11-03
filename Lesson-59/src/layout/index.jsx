import Navbar from "./navbar";
import Aside from "./aside";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <Aside />
      <div className="grid grid-cols-1 w-full max-w-[1320px] ">
        <Navbar />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
