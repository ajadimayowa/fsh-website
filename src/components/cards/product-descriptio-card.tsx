import { Button, Image } from 'react-bootstrap';
import './product-description-card.css';
import React from 'react';

const ProductDescriptionCard: React.FC<any> = ({ title,jobName, description, buttonText, bgColor,action }) => {
    return (
        <div className={`product-card-container d-flex flex-column gap-2 bg-${bgColor}  align-items-start p-3 m-3 rounded rounded-3`}>
            <Image height={78} className=''  src='https://verifiedsell.s3.eu-north-1.amazonaws.com/fshwebsiteresources/naomi-backend.jpg' />
            <div className='m-2 p-0'>
            <p className='fw-bold text-start m-0 p-0'>
                {title}
                wok9ja
            </p>
            <p className='p-0 m-0 text-start' style={{fontSize:'14px', lineHeight:'18px'}}>
                {description}
                Freelance platform for industry
professionals in Nigeria.
            </p>
            <div className='text-start mt-3' role='button'>
                Try it out
                <i className="bi bi-arrow-right-short"></i>
            </div>
            </div>

        </div>
    )

}

export default ProductDescriptionCard