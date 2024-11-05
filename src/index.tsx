import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { Home } from './pages/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Contact } from './pages/Contact';
import { NewContact } from './pages/Contact/pages/Create';
import { UpdateContact } from './pages/Contact/pages/Update';
import { ContactView } from './pages/Contact/pages/View';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <div>Error</div>,
    element: <Home />,
    children: [
      {
        path: "/contact",
        element: <Contact />,
        children: [
          {
            path: "new",
            element: <NewContact />,
          },
          {
            path: "view",
            element: <ContactView />,
          },
          {
            path: "update",
            element: <UpdateContact />,
          }
        ]
      }
    ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
