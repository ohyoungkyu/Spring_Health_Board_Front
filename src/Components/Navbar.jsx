import React from "react";

import { Helmet } from "react-helmet";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import Style from "../Style.css";
const Navbar = () => {
  return (
    <>
      <div className="header">
        <Link to="/" className="logotype">
          Health
        </Link>
        <div className="top-bar">
          <div className="search">
            <input type="search" placeholder="검색어를 입력하세요." />
            <div className="search-icon">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
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
