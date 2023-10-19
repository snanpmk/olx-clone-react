import React, { Fragment, useState } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { UserAuth } from "../../context/AuthContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { useNavigate,Link} from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import { v4 } from "uuid";

const Create = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { user } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uploadImage = async () => {
      if (image === null) return;
      const imageRef = ref(storage, `images/${image.name + v4()}`);
      await uploadBytes(imageRef, image);
      return imageRef;
    };

    const imageRef = await uploadImage();
    const imageUrl = await getDownloadURL(imageRef);
    const date = new Date()
    const productData = {
      name,
      category,
      price,
      description,
      sellerName,
      phoneNumber,
      image: imageUrl,
      user: user.uid,
      createdAt: date.toDateString(),
    };

    const docRef = await addDoc(collection(db, "Products"), productData);

    navigate("/");

    console.log("Document written with ID: ", docRef.id);
    console.log(name + "  " + imageUrl);
  };

  return (
    <Fragment>
      <Header />
      <div className="centerDiv">
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Product Name</label>
          <br />
          <input
            onChange={(e) => setName(e.target.value)}
            className="input"
            type="text"
            id="fname"
            name="Name"
            value={name}
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            onChange={(e) => setCategory(e.target.value)}
            className="input"
            type="text"
            id="fname"
            name="category"
            value={category}
          />
          <br />
          <label htmlFor="price">Price</label>
          <br />
          <input
            onChange={(e) => setPrice(e.target.value)}
            className="input"
            type="number"
            id="fname"
            name="Price"
            value={price}
          />
          <br />
          <label htmlFor="description">Description</label>
          <br />
          <input
            onChange={(e) => setDescription(e.target.value)}
            className="input"
            type="text"
            id="description"
            name="description"
            value={description}
          />
          <br />
           <label htmlFor="sellerName">Seller Name</label>
          <br />
          <input
            onChange={(e) => setSellerName(e.target.value)}
            className="input"
            type="text"
            id="sellerName"
            name="sellerName"
            value={sellerName}
          />
          <br />
          <label htmlFor="phoneNumber">Phone Number</label>
          <br />
          <input
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="input"
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
          />
          <br />
          <br />
          <br />
          {image?(
            <img
            alt=""
            width="200px"
            height="200px"
            src={image ? URL.createObjectURL(image) : ""}
          />
          ):(<></>)}
          
          <br />
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          <br />
          <button type="submit" className="uploadBtn">
            Upload and Submit
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Create;
