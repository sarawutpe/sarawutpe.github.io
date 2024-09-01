import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import HomePage from "./HomePage";
import PortfolioPage from "./PortfolioPage";

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "portfolio/:project",
        element: <PortfolioPage />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
