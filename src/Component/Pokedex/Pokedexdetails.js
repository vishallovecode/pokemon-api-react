import { React, useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { fetchData } from '../../FetchApi/fetchData';
import { getRequestOptions } from '../../Utils/utils';

const PokedexDetails = (props) => {

    const initialState = {
        height: '',
        weight: '',
        abilities: '',
        moves: '',
        imgUrl: '',
        imgLoading: true,
        loading:false,
    }
    const [pokedexDetails, setPokeDexdetails] = useState(initialState);

    useEffect(() => {
        const { id } = props.match.params;
        getPokedexdetails(id)

    }, [])

    const getPokedexdetails = async (id) => {
        setPokeDexdetails({
            ...pokedexDetails,
            loading:true
        })
      
        const data = await fetchData(`https://pokeapi.co/api/v2/pokemon/${id}`, getRequestOptions(null, 'GET'))
        if(data) {
            setPokeDexdetails({
                ...pokedexDetails,
                loading:true
            })
        const url =data?.sprites?.front_default;
        const height = data?.height * 10;
        console.log(height, 'this is the height')
        const weight = data?.weight / 10;
        console.log('this is the weight', weight)
        const abilities = data?.abilities
            .map(ability => {
                return ability.ability.name
                    .toLowerCase()
                    .split('-')
                    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                    .join(' ');
            })
            .join(', ');
     

        const moves = data?.moves?.map(item => {
            return item.move.name.toLowerCase();
        })
        setPokeDexdetails({
            ...pokedexDetails,
            moves: moves?.join(','),
            imgUrl: url,
            abilities: abilities,
            height: height,
            weight: weight

        })
    }
    }
if(pokedexDetails.loading) {
    return <h3>Loading Details.......</h3>
}
    return (
        <div className='pokedex-card-details '>
            <Link to = '/' className="link">{'< Back'}</Link>
            <div className='pokedex-name-container'>
                <span className='pokedex-name'>Details</span>
            </div>

            <div className='details'>
                <div>
                    <div className='d-flex'>
                        <span className='title'>Height:</span>
                        <span className='title-values '>{pokedexDetails.height ?`${pokedexDetails.height} cm`: 'No Height to show'}</span>
                    </div>
                    <div className='d-flex'>
                        <span className='title'>Weight</span>  <span className='title-values ' >{pokedexDetails.weight ?`${pokedexDetails.weight} kg`: 'No weight to show'}</span>
                    </div>
                    <div className='d-flex '>
                        <span className='title ' >Abilities: </span>
                        <span className='title-values line-clamp' title='hello'>{pokedexDetails?.abilities ?pokedexDetails?.abilities: 'No abilitirs found'}</span>
                    </div>
                </div>
                { pokedexDetails.imgLoading ? <img src='/loader.gif' alt='loader' width='150px' /> : null}
                <div>
                    <img src={pokedexDetails.imgUrl} 
                    onLoad={()=>setPokeDexdetails({
                        ...pokedexDetails,
                        imgLoading:false
                    })}
                    alt='' />
                </div>
            </div>
            <div>

                <div className='d-flex' style={{marginLeft:'10px'}}>
                    <span className='title ' >Moves: </span>
                    <span className='title-values line-clamp' title={pokedexDetails.moves}>
                        {pokedexDetails.moves ? pokedexDetails.moves : 'No moves'}</span>
                </div>
            </div>

        </div> 
    )
}

export default withRouter(PokedexDetails);


