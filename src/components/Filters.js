import { useEffect, useState } from "react";

const Filters = ({setSelectedCategory}) => {

    const handleCategoryClick = (name) => {
        setSelectedCategory(name);
    };


    return (
        <div className="filterContainer">
            <h3>Categories</h3>
            <button onClick={() => handleCategoryClick("")} className="filterBtn">All Products</button>
            <button onClick={() => handleCategoryClick("electronics")} className="filterBtn">Electronics</button>
            <button onClick={() => handleCategoryClick("jewelery")} className="filterBtn">Jewelery</button>
            <button onClick={() => handleCategoryClick("men's clothing")} className="filterBtn">Men's Clothing</button>
            <button onClick={() => handleCategoryClick("women's clothing")} className="filterBtn">Women's Clothing</button>
        </div>
    );
};
export default Filters;

