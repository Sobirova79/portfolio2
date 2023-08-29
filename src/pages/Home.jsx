import React from "react";
import user from "../images/gl.png";
import comment_user from "../images/commentuser.png";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <div className="page home">
      <div className="home__left">
        <TypeAnimation
          sequence={["Welcome !!!", 1000, "Hey, I’m Abdulaziz!", 2000]}
          speed={1}
          repeat={Infinity}
          className="home__name"
        />
        <h1 className="home__job">
          Building Digital Products, Brands & Experience.
        </h1>
        <p className="home__text">
          A Product Design and Visual Designer in SF I”m Specialize in UI/UX,
          Responsive web design, and visual Development.
        </p>
        <div className="home__buttons">
          <button className="home__button-hire">Hire Me</button>
          <button className="home__button-work">My Work</button>
        </div>
      </div>
      <div className="home__right">
        <img src={user} alt="Abdulaziz" className="home__image" />
        <div className="home__comment">
          <p className="home__comment-text">
            ‘’Musa has benn an outstanding contributor to our team’s UI Designer
            needs highly recommened’’
          </p>
          <div className="home__comment-user">
            <img
              src={comment_user}
              alt="comment_user"
              className="home__comment-img"
            />
            <div className="home__comment-person">
              <span className="home__comment-username">Jason Holder</span>
              <p className="home__comment-userjob">UX Designer at Futura</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
