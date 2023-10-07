import "./Category.scss";
import iPadCat from "../../../assets/category/ipad-category.jpg";
import MacBookCat from "../../../assets/category/Macbook-category.jpg";
import iPhoneCat from "../../../assets/category/iphone-14-category.jpg";
import iMacCat from "../../../assets/category/iMac-category.jpg";
import StudioCat from "../../../assets/category/mac-studio-category.jpg";
import MacminiCat from "../../../assets/category/mac-mini-category.jpg";
import WatchCat from "../../../assets/category/Apple-Watch-Category.jpg";
import AirpodsCat from "../../../assets/category/AirPods-category.jpg";
const Category = () => {
    return (
        <div className="shop-by-category" >
            <div className="categories">
                <div className="category">
                    <img src={MacBookCat} alt="" />
                    <div className="cat-block">MacBook</div>
                </div>
                <div className="category">
                    <img src={iPhoneCat} alt="" />
                    <div className="cat-block">iPhone</div>
                </div>
                <div className="category">
                    <img src={iMacCat} alt="" />
                    <div className="cat-block">iMac</div>
                </div>
                <div className="category">
                    <img src={iPadCat} alt="" />
                    <div className="cat-block">iPad</div>
                </div>
                <div className="category">
                    <img src={StudioCat} alt="" />
                    <div className="cat-block">Mac Studio</div>
                </div>
                <div className="category">
                    <img src={MacminiCat} alt="" />
                    <div className="cat-block">Mac mini</div>
                </div>
                <div className="category">
                    <img src={WatchCat} alt="" />
                    <div className="cat-block">Watch</div>
                </div>
                <div className="category">
                    <img src={AirpodsCat} alt="" />
                    <div className="cat-block">AirPods</div>
                </div>
            </div>
        </div>
    );
};

export default Category;
