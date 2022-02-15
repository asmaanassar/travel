import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (

        <>
            <nav className="App-header">
                <Link to='/'> Home </Link>
            </nav>
            
        </>

    );
}

export default Header;