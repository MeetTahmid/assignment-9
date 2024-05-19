import React from "react";
import { Helmet } from "react-helmet";
import Eastate from "../../Eastate/Eastate";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Banner></Banner>
      <Eastate></Eastate>
    </div>
  );
};

export default Home;
