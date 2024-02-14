import { useEffect, useState } from "react";
import Filters from "./Filters";
import { log } from "console";
import Cart from "./Cart";
import proCards from "/src/components/proCards.css";
const ProCards = () => {
    const [Products, setProducts] = useState([]);
    const [Notify, setNotify] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let apiUrl = `https://fakestoreapi.com/products`;
            if (selectedCategory){
                apiUrl += `/category/${selectedCategory}`;
            }
            const data = await fetch(apiUrl);
            const json = await data.json();
            setProducts(json);
            console.log(apiUrl);
            console.log(json);
            console.log(selectedCategory);
        };
        fetchData();
    }, [selectedCategory]);
    
    useEffect(() => {
        console.log("Cart items updated:", cartItems);
    }, [cartItems]);

    const addToCart = (productId) => {
        setCartItems([...cartItems, productId]);
        console.log("Product added to cart:", productId);
        setNotify(true);
        setTimeout(() => {
            setNotify(false)
        }, 3000);
    };
    return (
        <div>
            <Filters setSelectedCategory={setSelectedCategory}/>
            <div className={`notify ${Notify ? 'show' : ''}`}>
                {Notify && <h3 id="cartNotify">Item Added to Cart!!</h3>}
            </div>
            <div className="productContainer">
            {Products.map(product => (
                <div key={product.id} className="productCard">
                    <img className="productImg" src={product.image} alt={product.title} />
                    <h4 className="productDetails">{product.title}</h4>
                    <h4 className="productDetails">$ {product.price}</h4>
                    <p id="tooltip" className="productDetails">{product.description}</p>
                    <h5 className="productDetails">{product.rating.rate} Stars, Reviews: {product.rating.count}</h5>
                    <div>
                        <button onClick={() => addToCart(product.id)} id="addToCart"><h4>Add to Cart</h4></button>
                    </div>
                </div>
            ))}
        </div>
        <Cart cartItems={cartItems} />
        </div>
        
    )
}
export default ProCards;



