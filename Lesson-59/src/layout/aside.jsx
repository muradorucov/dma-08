import React from "react";
import { Link } from "react-router";
import { Info, House, ShoppingBasket, NotebookTabs, ChartBarStacked } from 'lucide-react';

function Aside() {
  return (
    <aside className="h-[calc(100vh-56px)] w-60 bg-white border-r border-gray-200 shadow-sm flex flex-col justify-between">
      <div className="p-4">
        <ul className="space-y-2 text-sm font-medium text-gray-700">
          <li>
            <Link to="/" className="flex items-center gap-2 p-2 rounded-md hover:bg-[#661BDC]/10 hover:text-[#661BDC]">
              <span>
                <House />
              </span> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/products" className="flex items-center gap-2 p-2 rounded-md hover:bg-[#661BDC]/10 hover:text-[#661BDC]">
              <span>
                <ShoppingBasket />
              </span> Products
            </Link>
          </li>
          <li>
            <Link to="/categories" className="flex items-center gap-2 p-2 rounded-md hover:bg-[#661BDC]/10 hover:text-[#661BDC]">
              <span>
                <ChartBarStacked />
              </span> Categories
            </Link>
          </li>
          <li>
            <Link to="/contacts" className="flex items-center gap-2 p-2 rounded-md hover:bg-[#661BDC]/10 hover:text-[#661BDC]">
              <span>
                <NotebookTabs />
              </span> Contact
            </Link>
          </li>
          <li>
            <Link to="/about" className="flex items-center gap-2 p-2 rounded-md hover:bg-[#661BDC]/10 hover:text-[#661BDC]">
              <span>
                <Info />
              </span> About

            </Link>
          </li>
        </ul>
      </div>

      <div className="p-4 border-t text-xs text-gray-500">
        © {new Date().getFullYear()} Admin
      </div>
    </aside>
  );
}

export default Aside;
