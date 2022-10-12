import React from "react";
import { Col } from "react-bootstrap";
import { v4 as uuidv4} from 'uuid';
import './Question.css'

const Question = ({ questions }) => {
  const { question, options } = questions;
  return (
    <Col lg={12}>
      <div className="question_section">
        <h3> {question}</h3>
      </div>
      <div className="question_option card">
        {options.map((option) => {
          return (
            <div className="" key={uuidv4()}>
              <input type="radio" id={option} name="option" />
              <label htmlFor={option} className="option_text"> {option}</label>
            </div>
          );
        })}
      </div>
    </Col>
  );
};

export default Question;
