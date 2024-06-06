import React from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import Support from "./pages/Support/Support";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TransactionPage from "./pages/TransactionPage/TransactionPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transactionPage",
    element: <TransactionPage />,
  },
  {
    path: "/support",
    element: <Support />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
