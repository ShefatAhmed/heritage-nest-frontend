import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import HomePage from "../pages/LandingPage/HomePage";
import BuyerScreen from "../pages/BuyerScreen/BuyerScreen";
import Services from "@/pages/Services/Services";
import PropertyDetailsPage from "@/pages/BuyerScreen/PropertyDetailsPage";
import PropertyDetailsPage2 from "@/pages/PropertyDetails/PropertyDetailsPage2";

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
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/property/:id",
        element: <PropertyDetailsPage />,
        loader: ({ params }) =>
          fetch(
            `https://heritage-nest-backend.vercel.app/property/${params.id}`
          ),
      },
      {
        path: "/sell",
        element: <PropertyDetailsPage2 />,
      },
    ],
  },
]);
