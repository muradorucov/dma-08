import { createBrowserRouter } from "react-router";
import Layout from "../layout";
import Dashboard from "../pages/admin/dashboard";
import Products from "../pages/admin/products";
import Categories from "../pages/admin/categories";
import Contact from "../pages/admin/contact/contact";
import About from "../pages/admin/about";
import ProtectedRoute from "../provider/protectedRoute";
import Login from "../pages/login";
import NotFound from "../pages/404";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute>
      <Layout />
    </ProtectedRoute>,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: "products",
        element: <Products />
      },
      {
        path: "categories",
        element: <Categories />
      },
      {
        path: "contacts",
        element: <Contact />
      },
      {
        path: "about",
        element: <About />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "*",
    element: <NotFound />
  }
]) 