import { createBrowserRouter } from "react-router";
import RootLayout from "../LayOut/RootLayout/RootLayout";
import AllTickets from "../Pages/AllTickets/AllTickets";
import Home from "../Pages/Home/Home";

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
    ],
  },
]);

export default router;
