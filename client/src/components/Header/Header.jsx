import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import ARASP from "../../assets/AR-ASP-Logo.png";

import { BsSearch } from "react-icons/bs";
import { BsBag } from "react-icons/bs";
// import { AiOutlineHeart } from "react-icons/ai";
import { HiBars3BottomRight } from "react-icons/hi2";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import MobileMenu from "./MobileMenu/MobileMenu";
import { Context } from "../../utils/context";

import "./Header.scss";


const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const {cartCount} = useContext(Context);
    const navigate = useNavigate();
    
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
        <>
            <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
                <div className="header-content">
                    <div className="left" onClick={() => navigate("/")}>iCenter</div>

                    <div className="all-menu-items">
                        <ul className="center">
                            <li onClick={() => navigate("/store")}>Shop</li>
                            <li onClick={() => navigate("/category/1")}>MacBook</li>
                            <li onClick={() => navigate("/category/2")}>iPhone</li>
                            <li onClick={() => navigate("/category/4")}>iPad</li>
                            <li onClick={() => navigate("/category/3")}>iMac</li>
                            <li onClick={() => navigate("/category/5")}>Studio</li>
                            <li onClick={() => navigate("/category/7")}>Watch</li>
                            <li onClick={() => navigate("/category/8")}>AirPods</li>
                            <li>Accessories</li>
                            <li onClick={() => navigate("/stores")}>Stores</li>
                            <li onClick={() => navigate("/iservice")}>iService</li>
                            <li>Ultimaker</li>
                        </ul>

                        <div className="mobile-bar">
                                <HiBars3BottomRight onClick={() => setShowMobileMenu(true)} />
                        </div>

                        <div className="right">
                            <BsSearch onClick={() => setShowSearch(true)} />
                            {/* <AiOutlineHeart /> */}
                            <span className="cart-icon" onClick={() => setShowCart(true)}>
                                <BsBag />
                                {!!cartCount && <span>{cartCount}</span>}
                            </span>
                            <div className="ar-asp-logo">
                                <img src={ARASP} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {showCart && <Cart setShowCart={setShowCart} />}
            {showSearch && <Search setShowSearch={setShowSearch} />}
            {showMobileMenu && <MobileMenu setShowMobileMenu={setShowMobileMenu} />}
        </>
    );
};

export default Header;
