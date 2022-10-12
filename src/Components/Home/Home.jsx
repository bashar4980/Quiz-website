import React from "react";
import { useLoaderData } from "react-router-dom";
import './Home.css'
import Bg from "../Background/Bg";
import Quiz from "../Quiz/Quiz";
import Row from 'react-bootstrap/Row';



const Home = () => {
  const quizesData = useLoaderData();
  const { data } = quizesData;

  return (
    <div>
      <Bg></Bg>

      <Row className="quize_section my-5">
        
        <h3 className="text-center fw-bold mb-5">Let's Start</h3>
       
 
          {
            data.map(quiz =>{
            return(
              <Quiz key={quiz.id} quiz={quiz}></Quiz>
            )
            })
          }
      
       
      </Row>
    </div>
  );
};

export default Home;
