import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  About,
  HomeLayout,
  Landing,
  ContactPage,
  Works,
  Aer,
  Invoice,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/works",
        element: <Works />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/aer",
        element: <Aer />,
      },
      {
        path: "/invoice",
        element: <Invoice />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
