import React from 'react';
import { useLoaderData } from 'react-router-dom';
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
    const {data} = quizData;

    console.log(data)
    return (
        <div>
          
            <LineChart width={500} height={400} data={data} >
            <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
           </LineChart> 
           
        </div>
    );
};

export default Statistics;