import { Button, Image } from 'react-bootstrap';
import './itemlist-card.css';
import React from 'react';
import ProductDescriptionCard from './product-descriptio-card';

const dat = [
    {},
    {},
    {}
]
const ItemListCard: React.FC<any> = ({ title,jobName,data, description, buttonText, bgColor,action }) => {
    return (
        <div className={`itemlist-card-container p-4 d-flex flex-column justify-content-center text-center gap-2 bg-${bgColor}  align-items-center p-4 m-3 rounded rounded-3`}>
            <h3 className='headers'>
                {title}
            See some products we have built.
            </h3>
            <p>
                {description}
            We are exactly who we say we are.
            </p>
            <ul className='d-flex flex-wrap p-0'>
                {
                    dat.map(()=>(<ProductDescriptionCard bgColor={'light'}/>))
                }
            </ul>
           
            

        </div>
    )

}

export default ItemListCard