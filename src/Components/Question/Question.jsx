import React from "react";
import { Col } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Question.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEyeSlash} from "@fortawesome/free-solid-svg-icons";

const Question = ({ questions }) => {
  const { question, correctAnswer, options } = questions;

  const checkQuestion = (userValue , correctValue)=>{
    if(userValue === correctValue){
      return toast.success("Right Answer");
     }
     else{
       return toast.warn("Wrong Answer!");
     }
  }
  
  return (
    <Col lg={12}>
      <div className="question_section">
        <h3> {question}</h3>
      </div>
      <div className="question_option card">
        <div className="text-end">
          <FontAwesomeIcon
            icon={ faEyeSlash}
            onClick={() => {
              toast.success(correctAnswer) ;
            }}
          />

          
        </div>
        {options.map((option) => {
          return (
            <div className="" key={uuidv4()}>
              <div className="card-body" >
           
              <input type="radio" id={option} name="option"  onClick={()=>checkQuestion(option , correctAnswer)}/>
                <label  htmlFor={option} className="option_text">
               
                  {option}
                </label>
         
              </div>
            </div>
          );
        })}
      </div>
      <ToastContainer position="top-center" autoClose={1000} />
    </Col>
  );
};

export default Question;
