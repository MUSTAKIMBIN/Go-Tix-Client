import { createBrowserRouter } from "react-router";
import RootLayout from "../LayOut/RootLayout/RootLayout";
import AllTickets from "../Pages/AllTickets/AllTickets";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIN/LogIn";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "allTickets",
        element: <AllTickets></AllTickets>,
      },
      {
        path: "logIn",
        Component: LogIn,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);

export default router;
