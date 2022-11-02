import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="side-bar">
        <div>
          <Link className="side-menu" to="/chest">
            가슴
          </Link>
          <Link className="side-menu" to="/back">
            등
          </Link>
          <Link className="side-menu" to="/shoulder">
            어깨
          </Link>
          <Link className="side-menu" to="/arm">
            팔
          </Link>
          <Link className="side-menu" to="/thigh">
            허벅지
          </Link>
          <Link className="side-menu" to="/hamstrings">
            햄스트링
          </Link>
          <Link className="side-menu" to="/calf">
            종아리
          </Link>
          <Link className="side-menu" to="/abs">
            복근
          </Link>
        </div>
      </div>
      <div className="main"></div>
    </>
  );
};

export default Sidebar;
