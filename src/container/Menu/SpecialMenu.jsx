import React from "react";
import { SubHeading, MenuItem } from "../../components";
import { images} from "../../constants";
import {wines,cocktails} from "../../constants/data"
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className=" specialMenu flex__center section__padding" id="menu">
    <div className="specialMenu-title">
      <SubHeading title=" Menu That Fits Your Palatte" />
      <h1 className=" headtext__cormorant ">Today's Special</h1>
    </div>
    <div className=" specialMenu-menu ">
      <div className=" specialMenu-menu-wine flex__center  ">
        <p className=" specialMenu-menu-heading ">Wine & Beer</p>
        <div className=" specialMenu-menu-item ">
          {wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>

      <div className=" specialMenu-menu-img ">
        <img src={images.menu} alt="menu" />
      </div>

      <div className=" specialMenu-menu-cocktails flex__center  ">
        <p className=" specialMenu-menu-heading ">Cocktails</p>
        <div className=" specialMenu-menu-item ">
          {cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: "15px" }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
