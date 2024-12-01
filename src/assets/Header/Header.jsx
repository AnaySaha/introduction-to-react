import { Link, NavLink} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
         
           <nav>

           <h2>Navbar</h2>
           <NavLink to="/users">Users</NavLink> 
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact Us</a>
           </nav>
        </div>
    );
};

export default Header;