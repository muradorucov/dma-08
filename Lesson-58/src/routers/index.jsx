import { createBrowserRouter } from "react-router";
import Home from "../pages/home";
import Users from "../pages/users";
import SingleUser from "../pages/singleuser";
import Comments from "../pages/comments";
import SingleComment from "../pages/singlecomment";
import Layout from "../layout";
import NotFound from "../pages/404";
import Login from "../pages/login";
import PrivateRouter from "../provider";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRouter>
      <Layout />
    </PrivateRouter>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "users",
        element: <Users />
      },
      {
        path: "user/:id",
        element: <SingleUser />
      },
      {
        path: "comments",
        element: <Comments />
      },
      {
        path: "comment/:id",
        element: <SingleComment />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "*",
    element: <NotFound />,
  }
])