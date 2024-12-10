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
import AdminPage from "./pages/admin/AdminPage";
import AdminProduct from "./components/admin/AdminProduct";
import VendorTable from "./components/vendor/VendorTable";
import AddVendor from "./components/vendor/AddVendor";
import VendorAddress from "./components/vendor/VendorAddress";
import VendorPaymentOptions from "./components/vendor/VendorPaymentOptions";
import VendorProduct from "./components/vendor/VendorProduct";
import VendorSignInPages from "./pages/VendorSignInPages";
import VendorPages from "./pages/VendorPages";
import VendorAddProduct from "./components/vendorpage/VendorAddProduct";
import VendorEditProduct from "./components/vendorpage/VendorEditProduct";

function App() {
  const { isAuth, isAdmin } = useAuthContext();

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
      ],
    },

    {
      path: "/admin",
      element: <AdminPage />,

      children: [
        { path: "/admin/product", element: <AdminProduct /> },
        { path: "/admin/vendor", element: <VendorTable /> },
      ],
    },
    {
      path: "/vendor",
      element: <VendorSignInPages />,
      children: [
        { path: "/vendor/addvendor", element: <AddVendor /> },
        { path: "/vendor/address", element: <VendorAddress /> },
        { path: "/vendor/payment", element: <VendorPaymentOptions /> },
        // { path: "/vendor/product", element: <VendorProduct /> },
      ],
    },
    {
      path: "/vendorpage",
      element: <VendorPages />,
      children: [
        { path: "/vendorpage/product", element: <VendorProduct /> },
        { path: "/vendorpage/product/new", element: <VendorAddProduct /> },
        {
          path: "/vendorpage/product/:productId/edit",
          element: <VendorEditProduct />,
        },
      ],
    },
    // {
    //   path: "/store",
    //   children: [
    //     { path: "", element: <Dashboard /> },
    //     { path: "products", element: <div>Manage Products</div> },
    //     { path: "orders", element: <div>Manage Orders</div> },
    //   ],
    // },
    {
      path: "*",
      element: <Error />,
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
