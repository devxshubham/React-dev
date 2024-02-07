import Contact from "./component/contact";
import Root from "./component/root";
import{
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "contacts/:contactId",
    element: <Contact />,
  },
]);

export default function App(){
  return <RouterProvider router={router} />;
}