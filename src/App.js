import Modal from "./components/Modal";
import Menu from "./components/Menu";
import ProductList from "./components/ProductList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="App">
        <Menu />
        <Modal />
        <ProductList />
      </div>
    ),
  },
  {
    path: "products/:productid",
    element: <ProductDetails />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
