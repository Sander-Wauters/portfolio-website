import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Portfolio = lazy(async () => ({
  default: (await import("./pages/portfolio")).Portfolio,
}));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Portfolio />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
