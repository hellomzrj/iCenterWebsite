import "./Home.scss";
import { useEffect, useContext } from "react";

// import Category from "./Category/Category";
import StoreCategory from "../Store/Category/Category";
// import Products from "../Products/Products";
import Stores from "../Stores/Stores";
import TopSlider from "./TopSlider/TopSlider";

import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";


const Home = () => {
    const { categories, setCategories } = useContext(Context); // products, setProducts
    useEffect(() => {
        getCategories();
        // getProducts();
    }, []);

    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            console.log(res);
            setCategories(res);
        });
    }

    // const getProducts = () => {
    //     fetchDataFromApi("/api/products?populate=*").then((res) => {
    //         console.log(res);
    //         setProducts(res);

    //     });
    // }

    return (
        <div>
            < TopSlider />
            <div className="main-content">
                <div className="layout">
                    <div className="intro">
                        We are Apple Authorised Reseller and Authorised Service Provider in Bangladesh. Buy iPhone, iPad, Apple Watch, Mac and AirPods and all accessories.
                    </div>
                    <StoreCategory categories={categories} />
                    {/* <Category /> */}
                    {/* <Products headingText="Popular Products" products={products}/> */}
                    <Stores />
                </div>
            </div>
        </div>
    );
};

export default Home;
