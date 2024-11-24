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
import Movie from "./pages/Movie.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";
import GPTsearch from "./pages/GPTsearch.jsx";

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
      {
        path: "/movies/:id",
        element: <Movie />,
      },
      {
        path: "/ai-search",
        element: <GPTsearch />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <ErrorBoundary>
      <Provider store={appStore}>
        <RouterProvider router={appLayout} />
        <ToastContainer />
      </Provider>
    </ErrorBoundary>
  </>
);
