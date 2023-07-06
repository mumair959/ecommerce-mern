import { useEffect, useState } from "react";
import axios from "axios";
import MainBanner from "../components/home/MainBanner";
import Category from "../components/home/Category";
import TopProduct from "../components/home/TopProduct";
import SmallBanner from "../components/home/SmallBanner";

const Home = () => {
    const [category, setCategory] = useState({});
    const [activeCategory, setActiveCategory] = useState('All');
    const [topProducts, setTopProducts] = useState([]);

    useEffect(() => {
        getCategoriesCount();
        getTopProducts();
    },[]);

    const getCategoriesCount = async (e) => {
        const {data} = await axios.get('/product/count/items');
        setCategory(data);
    };

    const getTopProducts = async (e) => {
        const {data} = await axios.get('/product/top-products/'+activeCategory);
        setTopProducts(data);
    };

    return (
        <>
            <MainBanner />

            <Category category={category}/>

            <TopProduct 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory}
            topProducts={topProducts}
            setTopProducts={setTopProducts}
            getTopProducts={getTopProducts}
            />

            <SmallBanner />
        </>
    )
}

export default Home;