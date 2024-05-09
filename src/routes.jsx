import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Buy from './pages/Buy.jsx';
import Sell from './pages/Sell.jsx';
import Rent from './pages/Rent.jsx';
import ErrorPage from "./pages/ErrorPage.jsx";


export const router = createBrowserRouter([
  {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />
  },
  {
    path: "/buy",
    element: <Buy />,
    errorElement: <ErrorPage />
},
{
    path: "/sell",
    element: <Sell />,
    errorElement: <ErrorPage />
},
{
  path: "/rent",
  element: <Rent />,
  errorElement: <ErrorPage />
},
{
    path: "/About",
    element: <About />,
    errorElement: <ErrorPage />
}
]);


