import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Style from "../Style.css";
const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="logotype">Health</div>
        <div className="top-bar">
          <div className="search">
            <input type="search" placeholder="검색어를 입력하세요." />
            <div className="search-icon">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </div>

          <div className="top-bar-right">
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

