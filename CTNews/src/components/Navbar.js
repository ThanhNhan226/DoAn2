import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src='Logo' />
        <div className="hiddenLinks">
            <Link to='/'> Trang chu</Link>
            <Link to='/tongquan'> Tong quan</Link>
            <Link to='/vitri'> Vi tri</Link>
            <Link to='/tienich'> Tien ich</Link>
            <Link to='/tiendo'> Tien do</Link>
            <Link to='/tintuc'> Tin tuc</Link>
        </div>
      </div>
      <div className="rightSide">
            <Link to='/'> Trang chu</Link>
            <Link to='/tongquan'> Tong quan</Link>
            <Link to='/vitri'> Vi tri</Link>
            <Link to='/tienich'> Tien ich</Link>
            <Link to='/tiendo'> Tien do</Link>
            <Link to='/tintuc'> Tin tuc</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
