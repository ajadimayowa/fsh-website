import { Button } from 'react-bootstrap';
import './action-card.css';
import React from 'react';

const ActionCard: React.FC<any> = ({ title, description, buttonText, bgColor,action }) => {
    return (
        <div className={`action-card-container text-center bg-${bgColor} text-light shadow shadow-sm p-3 m-3 rounded rounded-3`}>
            <h4 className='title'>
                {title}
            </h4>
            <p>
                {description}
            </p>
            <Button
            onClick={action}
             className='p-2 fw-bold' variant='outline bg-primary'>
                {buttonText}
            </Button>

        </div>
    )

}

export default ActionCard