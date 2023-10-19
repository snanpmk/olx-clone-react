import React from "react";

import "./Banner.css";
import Arrow from "../../assets/Arrow";
function Banner() {
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <span className="allcategorytxt">ALL CATEGORIES</span>
            <Arrow></Arrow>
          </div>
          <div className="otherQuickOptions">
            <span className="categoryName">Cars</span>
            <span className="categoryName">Motorcycles</span>
            <span className="categoryName">Mobile Pones</span>
            <span className="categoryName">For Sale:Houses & Apartments</span>
            <span className="categoryName">Scooters</span>
            <span className="categoryName">Commercial & Other Vehicles</span>
            <span className="categoryName">For Rent:Houses & Apartments</span>
          </div>
        </div>
        <div className="banner">
          <img className="bannerimg" src="https://statics.olx.in/olxin/banners/hero_bg_in_v6@1x.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
