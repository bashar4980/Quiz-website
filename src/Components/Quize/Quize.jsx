import React from 'react';
import './quize.css'
import Col from 'react-bootstrap/Col';


const Quize = ({quize}) => {
    const { name , logo , total} = quize
    return (
      
         
        <Col lg={3}>
        
         
        <div className="card">
                    <img src={logo} className="card-img-top" alt="card_img" />
             
                <div className="card-body">
                    <h5 className="card-title">
                       {name}
                    </h5>
                    <p className="card-text">
                        Total Quize: {total}
                    </p>
                    <button className='btn btn-primary'>Start Now..</button>
                </div>
                </div>
        </Col>
    
            
       
    );
};

export default Quize;