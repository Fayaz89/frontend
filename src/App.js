
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

function App() {
  return (
    <div>
      <Navbar/>
      
    <Outlet/>
    <Footer/>
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

