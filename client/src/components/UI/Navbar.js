import './Navbar.css';
import {NavLink} from 'react-router-dom';

const Navbar=props=>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
            <NavLink className="navbar-brand text-light ahref"  to="/">EasyCrypto</NavLink>
            <NavLink className="navbar-brand text-light" to="/history">Comparision History</NavLink>
            <a className="my-2 my-lg-0" href="https://github.com/BAAHUBALI7781" target="blank">
                <i className="fab fa-github fa-2x"></i>
            </a>
     
        </nav>
    );
}

export default Navbar;