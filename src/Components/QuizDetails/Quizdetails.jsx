import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import '../Question/Question.css'



const Quizdetails = () => {
    const singleQuiz = useLoaderData();
    const {total , name , questions} = singleQuiz.data
  
    return (
        <div className='question_details pt-5'>
             <h1 className='text-center'>Quiz of <span className='text-primary'>{name}</span></h1>
             <h3 className='text-center'>Total Quiz {total}</h3>
           
            <Container>
                <Row className="question_part mx-auto mb-5 pb-5">
                  
                    <div>

                    {
                        questions.map(question =>{
                            return(
                               <div>
                                
                                <Question key={question.id} questions={question}>
                               
                                </Question>
                               </div>
                            )
                        })
                    }
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Quizdetails;