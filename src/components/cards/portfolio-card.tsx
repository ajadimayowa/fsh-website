import {Image } from 'react-bootstrap';
import './product-description-card.css';
import React from 'react';

const PortFolioCard: React.FC<any> = ({ title,description,bgColor,imgUrl,url }) => {
    return (
        <div className={`product-card-container bg-light shadow d-flex flex-column gap-2 bg-${bgColor}  align-items-start p-3 m-3 rounded rounded-3`}
        style={{minHeight:'300px'}}
        >
            <Image height={78} className=''  src={imgUrl} />
            <div className='m-2 p-0'>
            <p className='fw-bold text-start m-0 p-0'>
                {title}
            </p>
            <p className='p-0 m-0 text-start' style={{fontSize:'14px', lineHeight:'18px'}}>
                {description}
            </p>
            <div className='text-start mt-3' role='button'>
            <a target='blank' href={url} className='text-start'>
                Explore
                <i className="bi bi-arrow-right-short"></i>
            </a>
            </div>
            </div>

        </div>
    )

}

export default PortFolioCard