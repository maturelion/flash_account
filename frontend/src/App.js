import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from './container/MainLayout';
import AuthLayout from './container/AuthLayout';
import Dashboard from "./pages/Dashboard"
import Transfer from "./pages/Transfer"
import Home from "./pages/Home"

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <MainLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />
      }
    ]
  },
  {
    path: "/transfer",
    element: <MainLayout />,
    children: [
      {
        path: "/transfer",
        element: <Transfer />
      }
    ]
  },
  {
    path: "/",
    element: <AuthLayout/>,
    children: [
      {
        path: "/",
        element: <Home />
      }
  ]
  },
  {
    path: "*",
    element: <Home />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
