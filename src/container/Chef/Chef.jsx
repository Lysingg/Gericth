import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className=" app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Words" />
      <h1 className="headtext__cormorant">What We Belive In</h1>

      <div className="chef-content">
        <div className="chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            excepturi?
          </p>
        </div>
        <p className="p__opensans">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus ipsa
          deleniti odit id, commodi nostrum repellendus omnis consectetur
          aliquid exercitationem asperiores enim est, ab dolore perspiciatis sed
          dicta
        </p>
      </div>

      <div className="chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
