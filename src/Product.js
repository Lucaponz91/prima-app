import React from 'react'
const img = "https://upload.wikimedia.org/wikipedia/commons/d/dd/Standard_razza_chihuahua.jpg"
const alt = "img_chihuahua";
const prezzo = 14.00;
const Product = () => {
    return (
        <article>
            <div className='card'>
                <img src={img} alt={`${alt}`} />
                <h5>Chihuahua di Razza</h5>
                <button>{prezzo} €</button>
                <p className='card_time'>PRESTO</p>
            </div>
        </article>
    )
}

export default Product