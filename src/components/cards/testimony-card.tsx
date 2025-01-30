import { Button, Image } from 'react-bootstrap';
import './testimony-card.css';
import React from 'react';

const TestimonyCard: React.FC<any> = ({ title,jobName, description, buttonText, bgColor,action }) => {
    return (
        <div className={`testimony-card-container d-flex justify-content-center flex-row gap-2 p-3 m-3 rounded rounded-3`}>
            <Image height={250} className='testifier-image rounded rounded-4'  src='https://verifiedsell.s3.eu-north-1.amazonaws.com/fshwebsiteresources/naomi-backend.jpg' />
            <div className='m-2 p-3  testifier-info'>
            <p style={{fontSize:'18px'}}>
                {description}
            </p>
            <p className='fw-bold m-0 p-0'>
                {title}
            </p>
            <p className='p-0 m-0'>{jobName}</p>
            </div>

        </div>
    )

}

export default TestimonyCard