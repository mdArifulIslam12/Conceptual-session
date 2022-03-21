import React from 'react';
import './Meun.css'
const Meun = (props) => {
    return (
        <div>
            <div className="container">
                <div className="row ">
                    <div className="col-lg-2">
                        <h5 className='logo'>Logo</h5>
                    </div>
                    <div className="col-lg-10 text-end">
                        <nav>
                            <ul className='items'>
                                
                                <li className='item'><a href="#">Home</a></li>                                
                                <li className='item'><a href="#">Contact</a></li>                                
                                <li className='item'><a href="#">Cart <sup>{props.count}</sup></a></li>
                                <li className='item'><a href="#">Login</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default Meun;