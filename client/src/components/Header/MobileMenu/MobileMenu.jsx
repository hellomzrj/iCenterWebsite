import { MdClose } from "react-icons/md"
import "./MobileMenu.scss";

const MobileMenu = ({ setShowMobileMenu }) => {
    return (
        <div className="mobile-menu-container">
            <div className="close-btn">
                <MdClose onClick={()=>{setShowMobileMenu(false)}} />
            </div>
            <div className="mobile-menu-items">
                <ul className="menu-items">
                    <li className="menu-item">Store</li>
                    <li className="menu-item">MacBook</li>
                    <li className="menu-item">iPhone</li>
                    <li className="menu-item">iPad</li>
                    <li className="menu-item">iMac</li>
                    <li className="menu-item">Studio</li>
                    <li className="menu-item">Watch</li>
                    <li className="menu-item">AirPods</li>
                    <li className="menu-item">Accessories</li>
                    <li className="menu-item">Stores</li>
                    <li className="menu-item">iService</li>
                    <li className="menu-item">Ultimaker</li>
                    
                </ul>
            </div>
        </div>
    );
}

export default MobileMenu;