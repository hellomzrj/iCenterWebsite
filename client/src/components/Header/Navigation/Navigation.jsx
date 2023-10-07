import { useEffect, useState, useContext } from "react";

import "./Navigation.scss";
import ARASP from "../../../assets/AR-ASP-Logo.png";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";

const Navigation = () => {

  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="Navbar">
      <div className="nav-container">
        <div className="nav-top">
          <div className="nav-top-left">
            <div className="logo">iCenter</div>
          </div>
          <div className="nav-top-right">
            <div className="arasp">
              <img src={ARASP} alt="" />
            </div>
          </div>
        </div>
        <div className="nav-bottom">
          <div className="nav-bottom-left">
            <ul className="menu-items">
              <li className="menu-item">Home</li>
              <li className="menu-item">Store</li>
              <li className="menu-item">MacBook</li>
              <li className="menu-item">iPhone</li>
              <li className="menu-item">iPad</li>
              <li className="menu-item">iMac</li>
              <li className="menu-item">Studio</li>
              <li className="menu-item">Mac mini</li>
              <li className="menu-item">Watch</li>
              <li className="menu-item">AirPods</li>
              <li className="menu-item">Accessories</li>
              <li className="menu-item">Stores</li>
              <li className="menu-item">iService</li>
              <li className="menu-item">Ultimaker</li>
            </ul>
          </div>
          <div className="nav-bottom-right">
            <TbSearch onClick={() => setShowSearch(true)} />
            {/* <AiOutlineHeart /> */}
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              <span>5</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation;