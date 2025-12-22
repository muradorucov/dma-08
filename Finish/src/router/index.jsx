import { createBrowserRouter } from "react-router";
import Home from "../pages/home";
import Login from "../pages/login";
import PrivateRouter from "../provider/privateRouter";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRouter>
      <Home />
    </PrivateRouter>
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "*",
    element: <div className="h-screen w-full flex justify-center items-center">
      <h1>Not Found</h1>
    </div>
  }
])