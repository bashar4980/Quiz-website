import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Blog.css'

const Blog = () => {
  return (
    <div>
      <Container className="mt-5 pt-5">
        <Row>
          <Col>
            <div className="question">
              <h4>What is the purpose of React Router?</h4>
              <p >
                React Js is mainly used for SPA(Single Page Application).If we
                don't use route the page is reload every navigation or menu when
                we click.ReactJS Router is mainly used for developing Single
                Page Web Applications. React Router is used to define multiple
                routes in the application.ypes a specific URL into the browser,
                and if this URL path matches any 'route' inside the router file,
                the user will be redirected to that particular route.
              </p>
            </div>
            <div className="question">
              <h4>What is useRef?</h4>
              <p>
                useRef Hook is use to render React DOM Directly.It is allows to
                persist values between renders. useRef React hook can be used to
                store a mutable value that does not cause a re-render when
                updated. It can be used to access a DOM element directly.useRef
                Return only one item. It return only one object called current.
              </p>
            </div>
            <div className="question">
              <h4>How Does ContexApi Work?</h4>
              <p>
                Context API provides a path to pass data through Componet tree
                without pass props down manually at every level. React Context
                Api provide a way for react app to effectivly produce global
                variable that can be pass around.It create global so every where
                of the childern can access this data.
              </p>
            </div>
          </Col>
       
          
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
