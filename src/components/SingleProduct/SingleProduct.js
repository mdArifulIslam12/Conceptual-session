import React from 'react';
import Details from '../Details/Details';
import './SingleProduct.css'
const SingleProduct = (props) => {
    const {title,image,price} = props.product
    return(
        <div className="col">
            <div className="card h-100 p-3">
                <img src={image} className="card-img-top product-img text-center" alt="" />
                <div className="card-body">
                    <h2>{title.slice(0,10)}</h2>
                    <h2>Price: {price}$</h2>                    
                </div>
                <div className=" border-0 bg-white">
                    <div className='d-flex justify-content-evenly'>
                        <button className='add-button' onClick={props.SetCount}>Add Cart</button>
                        <button className='delete-button'>Delete</button>
                        <Details product={props.product}></Details>
                    </div>
                </div>
            </div>
        </div>





    )
};

export default SingleProduct;