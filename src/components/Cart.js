import { useEffect, useState } from "react";
import cart from "/src/components/cart.css";

const Cart = ({ cartItems }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchCartItems = async () => {
            const fetchedItems = [];
            for (const itemId of cartItems) {
                const response = await fetch(`https://fakestoreapi.com/products/${itemId}`);
                const itemData = await response.json();
                fetchedItems.push(itemData);
            }
            setItems(fetchedItems);
        };
        fetchCartItems();
    }, [cartItems]);

    // Calculate total price and quantity for each item
    const itemQuantities = {};
    items.forEach(item => {
        if (itemQuantities[item.id]) {
            itemQuantities[item.id].quantity++;
        } else {
            itemQuantities[item.id] = { ...item, quantity: 1 };
        }
    });

    // Calculate total price
    let totalPrice = 0;
    for (const item of Object.values(itemQuantities)) {
        totalPrice += item.price * item.quantity;
    }

    return (
        <>
            <div className="cartCard">
                {Object.values(itemQuantities).map(item => (
                    <div className="itemDetails" key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <div>
                            <h4>{item.title}</h4>
                            <p>Price: ${item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            <p>Total Price: ${item.price * item.quantity}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <h2>Total: ${totalPrice}</h2>
            </div>
        </>
    );
};

export default Cart;
