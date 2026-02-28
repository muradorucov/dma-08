import { createBrowserRouter } from "react-router"
import Layout from "../layout/user"
import Home from "../pages/user/home"
import Contact from "../pages/user/contact"
import Login from "../pages/login"
import AdminLayout from "../layout/admin"
import Tours from "../pages/admin/tours"
import AdminContacts from "../pages/admin/contact"
import PrivateRouter from "../providers/private.router"
import Dashboard from "../pages/admin/dashboard"
import TourCreate from "../pages/admin/tourCreate"
export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/admin",
    element:
      <PrivateRouter>
        <AdminLayout />
      </PrivateRouter>
    ,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: "tours",
        element: <Tours />
      },
      // {
      //   path: "tours/edit/:id",
      //   element: <ToursEdit />
      // },
      {
        path: "tours/create",
        element: <TourCreate />
      },
      // {
      //   path: "tours/:id",
      //   element: <ToursSingle />
      // },
      {
        path: "contacts",
        element: <AdminContacts />
      }
      // ,
      // {
      //   path: "contacts/:id",
      //   element: <ToursSingle />
      // }
    ]
  }
])