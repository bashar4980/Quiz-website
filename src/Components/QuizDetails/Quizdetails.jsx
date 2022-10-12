import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import '../Question/Question.css'



const Quizdetails = () => {
    const singleQuiz = useLoaderData();
    const {total , name , questions} = singleQuiz.data
  
    return (
        <div>
             <h1 className='text-center'>Quiz of {name}</h1>
             <h3 className='text-center'>Total Quiz {total}</h3>
           
            <Container>
                <Row className="question_part mx-auto">
                    {
                        questions.map(question =>{
                            return(
                                <Question key={question.id} questions={question}></Question>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Quizdetails;