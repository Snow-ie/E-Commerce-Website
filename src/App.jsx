import {
  BrowserRouter,
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
  Navigate,
  Outlet,
} from "react-router-dom";
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
import WishListPage from "./pages/WishListPage";
import CartPage from "./pages/CartPage";
import Account from "./pages/Account";
import Checkout from "./pages/Checkout";

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
          element: isAuth ? <Navigate to="/" /> : <Outlet />,
          children: [
            {
              path: "/signup",
              element: <SignUp />,
            },
            {
              path: "/login",
              element: <Login />,
            },
            ,
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
      {" "}
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
