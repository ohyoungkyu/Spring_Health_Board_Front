import React from "react";
import Style from "../Style.css";
const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="logotype">NewsApp</div>
        <div className="search">
          <input type="search" placeholder="검색어를 입력하세요." />
        </div>
        <div className="nav-icon">
          <span style={{ marginLeft: "10px", marginRight: "10px" }}>
            로그인
          </span>
          <span style={{ marginLeft: "10px", marginRight: "10px" }}>
            회원가입
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
