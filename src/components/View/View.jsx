import React from "react";
import { Post } from "../../context/PostContext";
import { UserAuth } from "../../context/AuthContext";

import "./View.css";

function View() {
  const { postDetail } = Post();
  const { user } = UserAuth();

  return (
    <>
      <div className="viewParentDiv">
        <div className="imageShowDiv">
          <img src={postDetail.image} alt="" />
        </div>
        <div className="rightSection">
          <div className="productDetails">
            <p>&#x20B9; {postDetail.price} </p>
            <span>{postDetail.name}</span>
            <p>{postDetail.category}</p>
            <span>Posted On: {postDetail.createdAt.toString()}</span>
          </div>
          <div className="contactDetails">
            <h2 className="sellerinfotxt">Seller Information </h2>
            <p>{postDetail.sellerName}</p>
            <p>Mob No. {postDetail.phoneNumber}</p>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default View;
