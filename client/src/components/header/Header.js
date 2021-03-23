import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DialogBox from "../DialogBox";
import "./Header.css";
import { Link } from 'react-router-dom';
import { saveUser } from '../../store/slices/UserSlice'

const Navbar = () => {
  const user = useSelector( state => state.user );
  const dispatch = useDispatch();
  const isSignedIn = (user.name) ? true : false;

  return (
    <div className="navbar">
      <Link to="/" className="links"><h1 className="navbar__header">BlogiezZ 💬</h1></Link>
      {isSignedIn && (
        <div>
          <Link className="links" to="/create">Create Blog</Link>
          <span>  </span>
          <Link className="links" to="/view">View Blog</Link>
        </div>
      )}

      {isSignedIn ? (
        <div className="navbar__user__data">
          <h1 className="signedIn">{user.name}</h1>
          <button
            onClick={() => { dispatch(saveUser({ name: '', email: '' })) }}
            className="logout__button"
          >
            Logout 😦
          </button>
        </div>
      ) : (
        <div style={{display: 'flex'}}>
          <Link to="#" className="links" style={{margin: '5%'}}><DialogBox formName="Login"/></Link>
          <Link to="SignUp" className="links" style={{margin: '5%'}}>SignUp</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;