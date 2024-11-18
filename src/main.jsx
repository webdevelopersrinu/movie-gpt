import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import appStore from "./store/store.jsx";
import Login from "./pages/Login.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Browse from "./pages/Browse.jsx";

const appLayout = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <Provider store={appStore}>
      <RouterProvider router={appLayout} />
      <ToastContainer />
    </Provider>
  </>
);
