import React from "react";
import BarChart from "./BarChart";
import Card from "./Card";
import Chart from "./Chart";
import Footer from "./Footer";
import Header from "./Header";

const Home = () => {
  return (
    <div className="home">
      <Card />
      <div className="rightContainer">
        <Header />
        <Footer />
        <Chart />
        <BarChart />
      </div>
    </div>
  );
};

export default Home;
