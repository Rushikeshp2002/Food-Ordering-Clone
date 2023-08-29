import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import About from './components/About';
import { Error } from "./components/Error";
import Body from './components/Body';
import Contact from './components/Contact';
import RestrauntMenu from './components/RestrauntMenu';
import Profile from './components/ProfileClass';
import Shimmer from './components/Shimmer';
// import Instamart from './components/Instamart';


const Instamart = lazy(() => import("./components/Instamart")); 

const appRouter =  createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>,

      },
      {
        path:"/about",
        element: <About/>,
        children:[
          {
            path:"profile",
            element: <Profile/>
          }
        ]
      },
      {
        path:"/contact",
        element: <Contact/>
      },
      {
        path:"/restraunt/:id",
        element:<RestrauntMenu/>
      },
      {
        path:"/instamart",
        element:<Suspense fallback={<Shimmer />}><Instamart/></Suspense>
      }
    ]
  }
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
