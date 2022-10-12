import React from 'react';
import './quiz.css'
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


const Quiz = ({quiz}) => {
    const {id , name , logo , total} = quiz
    return (
      
         
        <Col lg={3}>
        
         
        <div className="card card_section">
                    <img src={logo} className="card-img-top" alt="card_img" />
             
                <div className="card-body d-flex justify-content-between align-items-center">
                   <div className="card_info">
                   <h5 className="card-title">
                       {name}
                    </h5>
                    <p className="card-text">
                        Total Quize: {total}
                    </p>
                   </div>
                   <div >
                    <Link to={`/quiz/${id}`}><button className="btn btn-primary ">Start Now</button></Link>
                   </div>
                </div>
                </div>
        </Col>
    
            
       
    );
};

export default Quiz;