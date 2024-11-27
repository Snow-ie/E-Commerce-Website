import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
  Outlet,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Error from "./pages/Error";
import useAuthContext, {
  AuthProvider,
} from "./components/hooks/useAuthProvider";

import Layout from "./components/layout/Layout";
import Contact from "./pages/Contact";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import Account from "./pages/Account";
import Checkout from "./pages/Checkout";
import WishListPage from "./pages/WishListPage";
import Products from "./pages/product/Products";
import ProductDetails from "./pages/product/ProductDetails";

function App() {
  const { isAuth } = useAuthContext();

  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/product",
          element: <ProductPage />,
        },
        {
          path: "/wishlist",
          element: <WishListPage />,
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
        {
          path: "/account",
          element: <Account />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/details/:id",
          element: <ProductDetails />,
        },
        {
          element: isAuth ? <Navigate to="/" replace /> : <Outlet />,
          children: [
            {
              path: "/signup",
              element: <SignUp />,
            },
            {
              path: "/login",
              element: <Login />,
            },
          ],
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
