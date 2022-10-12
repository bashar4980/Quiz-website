
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Quizdetails from './Components/QuizDetails/Quizdetails';
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
      },
      {
        path:'/quiz/:quizId',
     
    
        loader: async({params}) =>{
              return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
        },
        element:<Quizdetails></Quizdetails>
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
