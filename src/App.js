
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Quizdetails from './Components/QuizDetails/Quizdetails';
import Statistics from './Components/Statistics/Statistics';
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
        path:'/statistics',
        loader: async ()=>{
          return fetch("https://openapi.programming-hero.com/api/quiz")
       } ,
        element:<Statistics></Statistics>
      },
      {
        path:'/blogs',
         element:<Blog></Blog>
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
