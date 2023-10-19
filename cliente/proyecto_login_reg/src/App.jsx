
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import Body from './Components/Dashboard/components/Body Section/Body';

// import { BrowserRouter as Router, Route } from 'react-router-dom';

import {
  createBrowserRouter,
  RouterProvider
}from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Login/></div>

  },
  {
    path: '/register',
    element: <div><Register/></div>

  },
  {
    path: '/dashboard',
    element:<div><Dashboard/></div>

  },
  {
    path: "/body",
    element: <div><Body /></div>
  }
])
function App() {
  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
