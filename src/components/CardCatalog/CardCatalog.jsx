import React from 'react';
import x6ttacker from '../../imagenes/x6tracker.png'
import './CardCatalog.css';

function CardCatalog({ img, titleCard, price, info }) {
  return (
    <div>
        <div className='containerCard'>
            <div className='mt-5 containerInfoCard'>
                <h3 className='titleCardCat'>{titleCard}</h3>
                <p className='priceCardCat'>{price}</p>
                <p className='textCardCat'>Incluye:</p>
                <p className='textCardCat'>{info}</p>
            </div>
            <div className='imgCardCat'>
                <img src={img} alt="img tracker" className='img-fluid' />
            </div>
        </div>
    </div>
  )
}

export default CardCatalog