import React from 'react'
import logo from '../../assets/svgs/floatlogo.svg'
import { useNavigate } from 'react-router-dom'


const TopBar:React.FC<any> = ({toggleSideNav}) => {
    const navigate = useNavigate()
    return (
        <div className="navbar sticky-top bg-light p-3 px-3 d-flex justify-content-between">
            <img role='button' onClick={()=>navigate('/')} src={logo}/>
            <i className="bi bi-list fs-1 toggler" role='button' onClick={toggleSideNav}></i>
        </div>
    )
}

export default TopBar