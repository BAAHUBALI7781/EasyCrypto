import './Navbar.css';
import {NavLink} from 'react-router-dom';

const Navbar=props=>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <NavLink className="navbar-brand text-light"  to="/">EasyCrypto</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <NavLink className="nav-link text-light" to="/history">Comparision History</NavLink>

        </div>
        </nav>
    );
}

export default Navbar;