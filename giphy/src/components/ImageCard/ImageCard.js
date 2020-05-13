import React from 'react';
import './imageCard.css';

const ImageCard = (props) => {
    return (
        <section className="col-4">
            <div className="card">
                <img src={props.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <a href={props.origin} className="btn btn-primary">Conocer origen</a>
                </div>
            </div>
        </section>
    )
}

export default ImageCard
