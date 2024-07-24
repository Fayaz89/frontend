
import './App.css';
import Footer from './Footer';
import Login from './Login';
import Navbar from './Navbar';
import Register from './Register';
import { createBrowserRouter } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Nav from './Nav';
import FamilyManagement from './FamilyManagement';
import Cards from './Cards';
import Limits from './Limits';
import { useState } from 'react';
import Side from './Side';

function App() {
  const [isSideVisible, setIsSideVisible] = useState(false);

  const toggleSide = () => {
    setIsSideVisible(!isSideVisible);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar toggleSide={toggleSide} />
      <div className="flex flex-1">
        <Side isVisible={isSideVisible} />
        <div className={`flex-1 transition-all duration-300 ${isSideVisible ? 'ml-56' : 'ml-0'}`}>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

const AppRouter= createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Login/>
      },
      {
        path:"/family",
        element:<FamilyManagement/>
      },
      {
        path:"/Profile",
        element:<Profile/>
      },
      {
        path:"/SignUp",
        element:<Register/>
      },
      {
        path:"/Cards",
        element:<Cards/>
      },
      {
        path:"/Limits",
        element:<Limits/>
      },
      {
        path:"/dashboard",
        element:<Dashboard/>
      },
    ],
  },
]);
export default AppRouter;

