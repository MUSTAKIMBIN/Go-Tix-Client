import { createBrowserRouter } from "react-router";
import RootLayout from "../LayOut/RootLayout/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
  },
  {
    path: "about",
    element: <div>about page</div>,
  },
]);

export default router;
