
import { Link } from 'react-router-dom';
import logo from '../../assets/images/fshlogo.svg'
import './navbar.css'

function NavBar({ hamburgerPressed }) {

    return (
        <div className="navbar">
            <div className='logo'><Link to='/'><img src={logo} /></Link></div>

            <ul className='desktop-navigation'>
                <li><Link to='/'>Home</Link> </li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/services'>Services</Link></li>
                <li><Link to='/about-us'>About us</Link></li>
                <li><Link to='/locacte-us'>Locate us</Link></li>
                <li><Link to='/contact-us'><button>Contact us</button></Link></li>
            </ul>

            <div className='hamburger' onClick={hamburgerPressed}>
                <div className='hamburger-line' id='line1'></div>
                <div className='hamburger-line' id='line2'></div>
                <div className='hamburger-line' id='line3'></div>
            </div>
        </div>
    )
} export default NavBar;