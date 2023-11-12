import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import Navbar from "./navbar";
import Home from "./home";
import ErrorPage from "./error-page";
import Kitchen from "./kitchen";
import Relax from "./living";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },

  {
    path: "/kitchen",
    element: <Kitchen />
  },
  {
    path: "/living",
    element: <Relax />
  }
]);
root.render(
  <StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </StrictMode>
);
