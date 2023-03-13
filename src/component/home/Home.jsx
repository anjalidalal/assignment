import React from "react";
import Card from "../card/Card";
import LineChart from "../chart/LineChart";
import BarChart from "../chart/BarChart";
import Header from "../header/Header";

const Home = () => {
  return (
    <div className="home">
      <div className="main">
        <Header />
        <div className="container">
          <LineChart />
          <BarChart />
        </div>
      </div>
      <Card />
    </div>
  );
};

export default Home;
