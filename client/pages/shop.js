import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context";
import axios from "axios";
import ShopBanner from "../components/shop/ShopBanner";
import ProductList from "../components/shop/ProductList";

const Shop = () => {
    const [state] = useContext(UserContext);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getProductsList();
    },[]);

    const getProductsList = async (e) => {
        const {data} = await axios.get('/product');
        setProducts(data.products);
        setCategories(data.categories);
    };

    const filterByCategory = async (category) => {
        const {data} = await axios.get('/product/category/'+category);
        setProducts(data);
    };

    return (
        <>
            <ShopBanner />

            <ProductList 
            products={products} 
            categories={categories}
            state={state}
            filterByCategory={filterByCategory}/>
        </>
    )
}

export default Shop;