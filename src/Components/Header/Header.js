import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { AuthContext, FirebaseContext } from "../../store/FirebaseContext";
function Header() {
  const history = useHistory();
  const { user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div
          onClick={() => {
            history.push("/");
          }}
          className="brandName"
        >
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>

        <div className="loginPage">
          <span
            onClick={() => {
              if (!user) history.push("/login");
            }}
          >
            {user ? `Welcome ${user.displayName}` : "Login"}
          </span>
          <hr />
                  
        </div>
        {user && (
          <span className="login_btn"
            onClick={() => {
              firebase.auth().signOut();
              history.push("/login");
            }}
          >
            Logout
          </span>
        )}

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span
              onClick={() => {
                if (!user) history.push("/login");
                else history.push("/create");
              }}
            >
              SELL
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
