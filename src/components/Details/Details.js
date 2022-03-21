import React from 'react';
import './Details.css'

const Details = (props) => {
    const {title,image,description} = props.product
    return (
        <div>           
            <button type="button" className="btn btn-primary p-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Details
            </button>
            <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className='d-flex'>
                                <img src={image} alt="" />
                                <h5 className="modal-title" id="exampleModalLabel">{title}</h5>                                
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>{description}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;