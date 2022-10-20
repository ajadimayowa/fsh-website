import React from "react";
import './mobile-nav.css'
import { Link } from "react-router-dom";

function MobileNav({ toggleMobileNav }) {

    return (
        <ul className={toggleMobileNav}>

            <li><Link to='/'>Home</Link> </li>
            <li><Link to='/products'>Products</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/about-us'>About us</Link></li>
            <li><Link to='/locacte-us'>Locate us</Link></li>
            <li><Link to='/contact-us'><button>Contact us</button></Link></li>


        </ul>
    )
}

const style = {
    container: {
        position: 'fixed',
        top: '11%',
        width: '100%',
        height: '70vh',
        backgroundColor: 'pink',
        alignItem: 'center',
        justifyContent: 'center'
    }
}
export default MobileNav;