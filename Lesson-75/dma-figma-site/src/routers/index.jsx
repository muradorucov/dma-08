import { createBrowserRouter } from "react-router"
import Layout from "../layout/site"
import Home from "../pages/site/home"
import About from "../pages/site/about"
import Contact from "../pages/site/contact"
import Repair from "../pages/site/repair"
import Install from "../pages/site/install"
import SingleService from "../pages/site/singleserv"
import Delivery from "../pages/site/delivery"
import Guarantee from "../pages/site/guarantee"
import Success from "../pages/success"
import Order from "../pages/order"
import NotFound from "../pages/404"
import AdminLayout from "../layout/admin"

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
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "repair",
        element: <Repair />
      },
      {
        path: "installation",
        element: <Install />
      },
      {
        path: "services/:id",
        element: <SingleService />
      },
      {
        path: "delivery",
        element: <Delivery />
      },
      {
        path: "guarantee",
        element: <Guarantee />
      }
    ]
  },
  {
    path: "/panel",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <h1>Dashboard</h1>
      }
    ]
  },
  {
    path: "/success",
    element: <Success />
  },
  {
    path: "/order",
    element: <Order />
  },
  {
    path: "*",
    element: <NotFound />
  }
])