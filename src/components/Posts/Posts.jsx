import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { Post } from "../../context/PostContext";
import Heart from "../../assets/Heart";
import "./Post.css";
import { Link } from "react-router-dom";

function Posts() {
  const [products, setProducts] = useState([]);
  const { SetPostDetail } = Post();

  useEffect(() => {
    const productsCollection = collection(db, "Products");

    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(productsCollection);

        const productData = querySnapshot.docs.map((doc) => doc.data());

        console.log(productData + "😂😂😂😂😂😂😂😂😂");
        setProducts(productData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>More on Motorcycles</span>
          <span></span>
        </div>
        <Link to="/view">
          <div className="cards">
          {products.filter((product) => product.category === "Motorcycles").map((product) => (
        <div className="card" onClick={() => {
          SetPostDetail(product);
        }}>
          <div className="image">
            <img src={product.image} alt="" />
          </div>
          <div className="content">
            <p className="rate">&#x20B9; {product.price}</p>
            <p className="name">{product.name}</p>
          </div>
          <div className="date">
            <span>{product.createdAt.toString()}</span>
          </div>
        </div>
      ))}
          </div>
        </Link>
      </div>
      <div className="moreView">
        <div className="heading">
          <span>Fresh Recomendations</span>
          <span></span>
        </div>
        <Link to="/view">
          <div className="cards">
            {products.map((product) => (
              <div className="card" onClick={() => {
                SetPostDetail(product);
              }}>
                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="image">
                  <img src={product.image} alt="" />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9; {product.price}</p>
                  <span className="kilometer">{product.category}</span>
                  <p className="name">{product.name}</p>
                </div>
                <div className="date">
                  <span>{product.createdAt.toString()}</span>
                </div>
              </div>
              
            ))}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Posts;