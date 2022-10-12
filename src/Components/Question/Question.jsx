import React from "react";
import { Col } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Question.css";

const Question = ({ questions }) => {
  const { question, correctAnswer ,options } = questions;

  return (
    <Col lg={12}>
      <div className="question_section">
        <h3> {question}</h3>
      </div>
      <div className="question_option card">
       <div className="text-end">
       <button onClick={()=> toast.success(correctAnswer)}>Btn</button>
       <ToastContainer position="top-center" autoClose={2000}/>
       </div>
        {options.map((option) => {
          return (
            <div className="" key={uuidv4()}>
            
              <div className="card-body">
              <input type="radio" id={option} name="option" />
              <label htmlFor={option} className="option_text"> {option}</label>
              </div>
            </div>
          );
        })}
      </div>
    </Col>
  );
};

export default Question;
