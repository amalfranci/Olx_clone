import React, { useContext, useEffect, useState } from "react";

import "./Banner.css";

import Arrow from "../../assets/Arrow";
import { FirebaseContext } from "../../store/FirebaseContext";

function Banner() {
  const [products, setProducts] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection("products")
      .get()
      .then((snapshot) => {
        const allpost = snapshot.docs.map((product) => {
          return {
            ...product.data(),
          };
        });
        setProducts(allpost);
      });
  }, []);
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <span>ALL CATEGORIES</span>
          </div>
          <div className="otherQuickOptions">
            {Array.from(
              new Set(products.map((product) => product.category))
            ).map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>
        </div>
        <div className="banner">
          <img src="../../../Images/banner copy.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
