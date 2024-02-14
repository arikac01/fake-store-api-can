import Filters from "./Filters";
import { Link } from "react-router-dom";
import Cart from "/src/components/Cart";
const Header = () => {
    return (
            <div className="header">
                <img />
                <h3>Home</h3>
                <h3>About</h3>
                <h3><Link to={Cart}>Cart</Link></h3>
                <h3>Login</h3>
            </div>
    )
}
export default Header;