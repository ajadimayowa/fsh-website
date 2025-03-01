import { Image } from 'react-bootstrap';
import './testimony-card.css';
import React from 'react';


const TestimonyCard: React.FC<any> = ({testifierImg,description,jobName,testifierName }) => {
    return (
        <div className={`testimony-card-container d-flex justify-content-center flex-row gap-2 p-3 m-3 rounded rounded-3`}>
            <Image height={250} className='testifier-image rounded rounded-4'  src={testifierImg} style={{minWidth:'300px'}} />
            <div className='m-2 p-3  testifier-info'>
            <p style={{fontSize:'18px'}}>
                {description}
            </p>
            <p className='fw-bold m-0 p-0'>
                {jobName}
            </p>
            <p className='p-0 m-0'>{testifierName}</p>
            </div>

        </div>
    )

}

export default TestimonyCard