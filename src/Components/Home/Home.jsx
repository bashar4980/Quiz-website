import React from "react";
import { useLoaderData } from "react-router-dom";
import './Home.css'
import Bg from "../Background/Bg";
import Quize from "../Quize/Quize";
import Row from 'react-bootstrap/Row';



const Home = () => {
  const quizesData = useLoaderData();
  const { data } = quizesData;

  return (
    <div>
      <Bg></Bg>

      <Row className="quize_section my-5">
 
          {
            data.map(quize =>{
            return(
              <Quize key={quize.id} quize={quize}></Quize>
            )
            })
          }
      
       
      </Row>
    </div>
  );
};

export default Home;
