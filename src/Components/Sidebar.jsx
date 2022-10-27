import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="side-bar">
        <div>
          <Link className="side-menu" to="/">
            가슴
          </Link>
          <Link className="side-menu" to="/">
            등
          </Link>
          <Link className="side-menu" to="/">
            어깨
          </Link>
          <Link className="side-menu" to="/">
            팔
          </Link>
          <Link className="side-menu" to="/">
            허벅지
          </Link>
          <Link className="side-menu" to="/">
            햄스트링
          </Link>
          <Link className="side-menu" to="/">
            종아리
          </Link>
          <Link className="side-menu" to="/">
            복근
          </Link>
        </div>
      </div>
      <div className="main"></div>
    </>
  );
};

export default Sidebar;
