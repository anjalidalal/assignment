import React from "react";
import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";

const Home = () => {
  return (
    <div className="home">
      <Card />
      <div className="rightContainer">
        <Header />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
