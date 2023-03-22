import React from "react";
import Heading from "../../common/Heading";
import "./Featured.css";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  return (
    <>
      <section className="featured background">
        <div className="container">
          <Heading
            title="Types of property we offer"
            subtitle="Property which suits your requirement."
          />
          <FeaturedCard />
        </div>
      </section>
    </>
  );
};

export default Featured;
