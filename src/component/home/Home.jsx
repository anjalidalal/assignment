import React from "react";
import Card from "../card/Card";
import LineChart from "../chart/LineChart";
import BarChart from "../chart/BarChart";
import Header from "../header/Header";
import Todo from "../socialcard/Todo";
import Team from "../socialcard/Team";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Card />
      <LineChart />
      <BarChart />
      <Todo />
      <Team />
    </div>
  );
};

export default Home;
