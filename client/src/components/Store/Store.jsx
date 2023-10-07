import { useEffect, useContext } from "react";
import "./Store.scss";

import Category from "./Category/Category";
import Products from "../Products/Products";
import { Context } from "../../utils/context";

import { fetchDataFromApi } from "../../utils/api";

const Store = () => {
    const {categories, setCategories, products, setProducts} = useContext(Context);
    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*").then(res => { 
            console.log(res);
            setProducts(res);
            });
    }

    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then(res => { 
            console.log(res);
            setCategories(res);
            });
    }

    return (
        <div className="store-container">
            <Category categories={categories}/>
            <Products products={products} headingText="All Products" />

        </div>
    );
}

export default Store;