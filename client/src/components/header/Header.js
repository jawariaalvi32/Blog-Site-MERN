import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DialogBox from "../DialogBox";
import "./Header.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [inputValue, setInputValue] = useState("tech");
  const user = useSelector( state => state.user );
  const isSignedIn = (user.name) ? true : false;
  console.log("DDD",user)
  console.log(isSignedIn)
//   const userData = useSelector(selectUserData);

//   const dispatch = useDispatch();

//   const logout = (response) => {
//     dispatch(setSignedIn(false));
//     dispatch(setUserData(null));
//   };

//   const handleClick = (e) => {
//     e.preventDefault();
//     dispatch(setInput(inputValue));
//   };

  return (
    <div className="navbar">
      <Link to="/"><h1 className="navbar__header">BlogMania 💬</h1></Link>
      {isSignedIn && (
        <div>
          <Link to="/addpost">Create Blog</Link>
          <Link to="/posts">View Blog</Link>
        </div>
      )}

      {isSignedIn ? (
        <div className="navbar__user__data">
          {/* <Avatar
            className="user"
            src={userData?.imageUrl}
            alt={userData?.name}
          /> */}
          <h1 className="signedIn">{user.name}</h1>
          <button
            // onClick={renderProps.onClick}
            className="logout__button"
          >
            Logout 😦
          </button>
        </div>
      ) : (
        <Link to="#"><DialogBox/></Link>
        // <h1 className="notSignedIn">User not available 😞</h1>
      )}
    </div>
  );
};

export default Navbar;