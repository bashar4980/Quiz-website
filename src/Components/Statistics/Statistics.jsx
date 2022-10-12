import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import './Statistics.css'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const Statistics = () => {
  const quizData = useLoaderData();
  const { data } = quizData;

  console.log(data);
  return (

      <Container>
        <Row>
       <Col>
       <LineChart width={500} height={400} data={data} className="statistics_data">
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="total" stroke="#82ca9d" />
        </LineChart>
       </Col>
      </Row>
      </Container>

  );
};

export default Statistics;
