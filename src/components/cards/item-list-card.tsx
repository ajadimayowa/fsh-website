// import { Button, Image } from 'react-bootstrap';
import './itemlist-card.css';
import React from 'react';
import ProductDescriptionCard from './product-descriptio-card';

const dat = [
    {
        title:'wok9ja',
        imgUrl : 'https://verifiedsell.s3.eu-north-1.amazonaws.com/fshwebsiteresources/wok9jalogo.svg',
        description: 'Freelance platform for industry professionals in Nigeria.'
    },
    {
        title:'surplusfood',
        imgUrl : 'https://verifiedsell.s3.eu-north-1.amazonaws.com/fshwebsiteresources/surplusNijaLogo.svg',
        description: 'A grocery vendor store for buying and selling of groceries'
    },
    {
        title:'nesky',
        imgUrl : 'https://verifiedsell.s3.eu-north-1.amazonaws.com/fshwebsiteresources/nesky-logo.png',
        description: 'Real estate management solution'
    }
]
const ItemListCard: React.FC<any> = ({ title,description,bgColor}) => {
    return (
        <div className={`itemlist-card-container p-4 d-flex flex-column justify-content-center text-center gap-2 bg-${bgColor}  align-items-center p-4 m-3 rounded rounded-3`}>
            <h3 className='headers'>
                {title}
            </h3>
            <p>
                {description}
            We are exactly who we say we are.
            </p>
            <ul className='d-flex flex-wrap p-0'>
                {
                    dat.map((dat)=>(<ProductDescriptionCard imgUrl={dat.imgUrl} title={dat.title} description={dat.description} bgColor={'light'}/>))
                }
            </ul>
           
            

        </div>
    )

}

export default ItemListCard