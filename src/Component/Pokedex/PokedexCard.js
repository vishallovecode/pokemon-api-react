import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Pokedexcard.scss'

const PokedexCard = (props) => {

    const initialState = {
        name: '',
        imageUrl: '',
        Index: '',
        imgLoading: true,

    }
    const [pokedexData, setPokedexData] = useState(initialState);

    useEffect(() => {
        const { name, url } = props;
        const Index = url.split('/')[url.split('/').length - 2];
        const Url = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${Index}.png?raw=true`;

        setPokedexData({
            ...pokedexData,
            name: name,
            imageUrl: Url,
            Index:Index
        })
    }, []);

    const imageOnload = () => {

        setPokedexData({
            ...pokedexData,
            imgLoading: false
        })
    }

    return (
        <Link to={`/pokedex/${pokedexData.Index}`}
        className="pokedex-card">
            <div className="pokedex-name-container">
                <span className="pokedex-name">{pokedexData?.name}</span>
            </div>
            { pokedexData.imgLoading ? <img src='/loader.gif' alt='loader'/> : null}
            <img src={pokedexData.imageUrl}
                alt={pokedexData.name}
                onLoad={() => imageOnload()}
                />
        </Link>
    )
}

export default PokedexCard;