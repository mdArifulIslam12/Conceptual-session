import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Product.css'
const Product = (props) => {
    const[products, setProduct] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> setProduct(json))
    },[])
    return (
        <div>
            <h1 className='text-center pb-4 my-4'>All products</h1>
            
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    products.map(product => <SingleProduct 
                        product={product}
                        key={product.id}
                        SetCount={props.SetCount}
                    ></SingleProduct>)
                }
            </div>
        </div>
    );
};


export default Product;