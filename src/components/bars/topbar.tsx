import React from 'react'
import logo from '../../assets/svgs/floatlogo.svg'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap';


const TopBar: React.FC<any> = ({ toggleSideNav }) => {
    const navigate = useNavigate();

    const links = [
        {
            title: 'Home',
            url: '/'
        },
        {
            title: 'Potfolio',
            url: '/'
        },
        {
            title: 'Our Services',
            url: '/'
        },
        {
            title: 'About us',
            url: '/'
        },
        {
            title: 'Support',
            url: '/'
        }
    ]
    return (
        <div className="navbar sticky-top bg-light p-3 px-3 d-flex justify-content-between">
            <img role='button' onClick={() => navigate('/')} src={logo} />
            <i className="bi bi-list fs-1 nav-toggler" role='button' onClick={toggleSideNav}></i>
            <ul className='link-container desktop-nav gap-4 m-0 p-0'>
                {
                    links.map((link) => (
                        <li className='p-0 m-0'><a className='link poppins-regular text-dark' style={{textDecoration:'none'}} href={link.url}>{link.title}</a></li>))
                }
                <Button className='fw-bold text-light'><a href='/tech-career' className='text-light' style={{textDecoration:'none'}}>Career In Tech</a></Button>
            </ul>
        </div>
    )
}

export default TopBar