
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from "./Home";
import Popular from "./Popular";
import Battle from  "./Battle";
import Layout from "./Layout";
import Results from "./Results";


 const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:
     [
    {
      path: "/",
     element: <Home/>,
    },
    {
     path: "/popular",
     element: <Popular/>,
    },
    {
      path: "/battle",
      element: <Battle/>,
    },
    {
      path:"/battle/results",
      element: <Results/>
    },
    {
      path: "*",
      element: <h3>Errooor</h3>
    }
 ]
}])
const App=() => 
<RouterProvider router={router}/>
  
export default App;

