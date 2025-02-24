import {Button} from 'react-bootstrap';
import './product-description-card.css';
import React from 'react';

const ServiceCard: React.FC<any> = ({ title,description,bgColor,icon }) => {
    return (
        <div className={`product-card-container shadow d-flex flex-column gap-2 bg-${bgColor}  align-items-start p-3 m-3 rounded rounded-3`}>
            <i className={`${icon} fs-1`}></i>
            {/* <Image height={78} className=''  src={icon} /> */}
            <div className='m-2 p-0'>
            <p className='fw-bold text-start m-0 p-0'>
                {title}
            </p>
            <p className='p-0 m-0 text-start' style={{fontSize:'14px'}}>
                {description}
            </p>
            <div className='text-start mt-3 align-items-center d-flex gap-2' role='button'>
                <Button className='text-light'>
                Request Quote
                </Button>
                <i className="bi bi-arrow-right-short"></i>
            </div>
            </div>

        </div>
    )

}

export default ServiceCard