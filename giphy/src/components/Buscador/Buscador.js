import React, { useState, useEffect } from 'react';
import ImageCard from '../ImageCard/ImageCard'
import axios from 'axios';

const Buscador = () => {

    const [texto, setTexto] = useState('');
    const [gif, setGif] = useState([]);

    const API_KEY = '2mHl2fxFasXDZj0LZ2w4GAoPzb9SwKKc';

    const ObtenerGif = () => {
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${texto}&limit=5`)
            .then(({ data }) => {
                // console.log('⚽️', data);
                console.log('🏀', data.data);
                setGif(data.data);
            })
            .catch((err) => console.error(err));
    }

    const handleChange = (event) => {
        // console.log(event.target.value);
        setTexto(event.target.value);
    }

    useEffect(() => {
        ObtenerGif();
    }, [texto]);

    return (
        <div>
            <div className="container">
                <input className="form-control" type="text" onChange={handleChange} />
                {/* <button onClick={() => ObtenerGif()}>Hacer petición</button> */}
                <div className="row">
                    {gif.length > 0
                        ? gif.map(element => <ImageCard key={element.id} img={element.images.downsized_large.url} />)
                        : <p className="text-center">No hay gifs</p>}
                </div>
            </div>
        </div>
    )
}

export default Buscador
