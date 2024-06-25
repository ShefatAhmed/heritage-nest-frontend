import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import HomePage from "../pages/LandingPage/HomePage";
import BuyerScreen from "../pages/BuyerScreen/BuyerScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/buy",
        element: <BuyerScreen />,
      },
    ],
  },
]);
