import { createBrowserRouter } from "react-router";
import App from "./App";
import { ShoesPage } from "./pages/ShoesPage";
import { ShoePage } from "./pages/ShoePage";
import { BagPage } from "./pages/BagPage";
import { HomePage } from "./pages/HomePage";
import StripePage from "./pages/StripePage";

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
        path: "/shoe/:name",
        element: <ShoePage />,
      },
      {
        path: "/shoes",
        element: <ShoesPage />,
        children: [
          {
            path: "/shoes/:gender",
            element: <ShoesPage />,
            children: [
              {
                path: "/shoes/:gender/:category",
                element: <ShoesPage />,
              },
            ],
          },
        ],
      },
      {
        path: "/bag",
        element: <BagPage />,
      },
      {
        path: "/payment",
        element: <StripePage />,
      },
    ],
  },
]);
