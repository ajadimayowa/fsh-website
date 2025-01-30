import React from 'react'
import logo from '../../assets/svgs/floatlogo.svg'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import './topbar.css'


const TopBar: React.FC<any> = ({ toggleSideNav }) => {
    const navigate = useNavigate();
    const currentLocation = useLocation().pathname

    const links = [
        {
            title: 'Home',
            url: '/'
        },
        {
            title: 'Services',
            url: '/services'
        },
        {
            title: 'Potfolio',
            url: '/potfolio'
        },
        {
            title: 'About us',
            url: '/about-us'
        },
        {
            title: 'Contact us',
            url: '/contact-us'
        }
    ]
    return (
        <div className="navbar sticky-top bg-light p-3 d-flex justify-content-between">
            <img role='button' onClick={() => navigate('/')} height={61} src='https://verifiedsell.s3.eu-north-1.amazonaws.com/fshwebsiteresources/fsh-png-logo.png' />
            
            <i className="sidebar-toggle bi bi-list fs-1" role='button' onClick={toggleSideNav}></i>
            <ul className='desktop-nav  gap-3 m-0 p-0'>
                
                {
                    links.map((link) => (
                        <li className='p-0 link m-0'><a className={`link fw-medium text-${currentLocation===link.url?'primary':'none'}`} style={{textDecoration:'none'}} href={link.url}>{link.title}</a></li>))
                }
                <a href='/tech-career' className='text-light rounded px-3 bg-primary poppins-semibold fw-bold py-2' style={{textDecoration:'none'}}>Career In Tech</a>
            </ul>
            
        </div>
    )
}

export default TopBar