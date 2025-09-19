import { createBrowserRouter } from "react-router";
import App from "./App";
import { HomePage } from "./pages/HomePage";
import { ShoePage } from "./pages/ShoePage";
import { BagPage } from "./pages/BagPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/:name",
        element: <ShoePage />,
      },
      {
        path: "/bag",
        element: <BagPage />,
      },
    ],
  },
]);
