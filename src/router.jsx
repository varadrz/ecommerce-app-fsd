import { createBrowserRouter } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Checkout from "./pages/Checkout"
import ProductDetails from "./pages/ProductDetails"
import Auth from "./pages/Auth"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout><Home /></MainLayout>,
  },

  {
  path: "/auth",
  element: <MainLayout><Auth /></MainLayout>,
},

  {
    path: "/cart",
    element: <MainLayout><Cart /></MainLayout>,
  },
  {
    path: "/login",
    element: <MainLayout><Login /></MainLayout>,
  },
  {
    path: "/signup",
    element: <MainLayout><Signup /></MainLayout>,
  },
  {
    path: "/checkout",
    element: <MainLayout><Checkout /></MainLayout>,
  },
  {
    path: "/product/:id",
    element: <MainLayout><ProductDetails /></MainLayout>,
  },
  {
    path: "/product/:id",
    element: <MainLayout><ProductDetails /></MainLayout>,
},
])

export default router
