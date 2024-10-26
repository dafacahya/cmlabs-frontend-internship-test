import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './pages/Homepages';
import CategoryDetail from './pages/CategoryDetails';
import ErrorPage from './pages/404';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/category/:categoryName",
    element: <CategoryDetail />,
    errorElement: <ErrorPage />
  }
]);

const root = createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);