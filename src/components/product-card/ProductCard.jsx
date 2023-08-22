import React from 'react'
import './product-card.css'

const ProductCard = (props) => {

    const { title, imgUrl, price } = props.item

    return (<div className="singe__product">
        <div className="product__img">
            <img src={imgUrl} alt="" />
        </div>

        <div className="product__content">
            <div className="rating text-center">
                <span>
                    <i class="ri-star-s-fill"></i>
                </span>
                <span>
                    <i class="ri-star-s-fill"></i>
                </span>
                <span>
                    <i class="ri-star-s-fill"></i>
                </span>
                <span>
                    <i class="ri-star-s-fill"></i>
                </span>
                <span>
                    <i class="ri-star-s-fill"></i>
                </span>
            </div>

            <h6>{title}</h6>

            <div className=' d-flex align-items-center justify-content-between'>
                <span className='price'>
                    {" "}
                    Price: $<span>{price}</span>
                </span>
                <span className='shopping__icon'>
                    <i class="ri-shopping-cart-line"></i>
                </span>
            </div>
        </div>
    </div>)
}

export default ProductCard