
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Main from './Layout/Main';


const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main> ,
    children:[
      {
        path:"/",
        loader: async ()=>{
           return fetch("https://openapi.programming-hero.com/api/quiz")
        } ,
        element: <Home></Home>
      }
    ]

  }
])
function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
