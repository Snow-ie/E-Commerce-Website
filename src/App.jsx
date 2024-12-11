import {
  Home,
  About,
  Contact,
  SignUp,
  Login,
  Error,
  ProductPage,
  CartPage,
  Account,
  Checkout,
  WishListPage,
  Products,
  ProductDetails,
  AdminPage,
  VendorSignInPages,
  VendorPages,
} from "./pages";

import {
  Layout,
  AdminProduct,
  VendorTable,
  AddVendor,
  VendorAddress,
  VendorPaymentOptions,
  VendorProduct,
  VendorAddProduct,
  VendorEditProduct,
} from "./components";

import { useAuthContext, AuthProvider } from "./hooks/index";

import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
  Outlet,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { isAuth, isAdmin } = useAuthContext();

  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/product", element: <ProductPage /> },
        { path: "/wishlist", element: <WishListPage /> },
        { path: "/cart", element: <CartPage /> },
        { path: "/account", element: <Account /> },
        { path: "/checkout", element: <Checkout /> },
        { path: "/products", element: <Products /> },
        { path: "/details/:id", element: <ProductDetails /> },
        {
          element: isAuth ? <Navigate to="/" replace /> : <Outlet />,
          children: [
            { path: "/signup", element: <SignUp /> },
            { path: "/login", element: <Login /> },
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
    { path: "*", element: <Error /> },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
