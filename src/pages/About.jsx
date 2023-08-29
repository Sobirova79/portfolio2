import React from "react";

function About() {
  return (
    <div>
      <div className="about ">
        <div className="about__title">
          <h2 className="about__title">STATISTIC</h2>
        </div>
        <div className="about__block">
          <div className="about__box">
            <h3 className="about__number">300+</h3>
            <h3 className="about__box-title">Project Delivery</h3>
          </div>
          <div className="about__box">
            <h3 className="about__number">8</h3>
            <h3 className="about__box-title">Years Experience</h3>
          </div>
          <div className="about__box">
            <h3 className="about__number">16</h3>
            <h3 className="about__box-title">Awards</h3>
          </div>
          <div className="about__box">
            <h3 className="about__number">70+</h3>
            <h3 className="about__box-title">Happy Clients</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
