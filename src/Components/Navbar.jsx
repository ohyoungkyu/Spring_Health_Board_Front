import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Style from "../Style.css";
const Navbar = () => {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://www.w3schools.com/w3css/4/w3.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto"
        ></link>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Helmet>
      <div className="header">
        <div className="logotype ">Health</div>
        <div className="top-bar">
          <div className="search">
            <input type="search" placeholder="검색어를 입력하세요." />
          </div>

          <div className="top-bar-right font-semibold">
            <Link to="/" style={{ marginLeft: "10px", marginRight: "20px" }}>
              로그인
            </Link>
            <Link to="/" style={{ marginLeft: "10px", marginRight: "20px" }}>
              회원가입
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
