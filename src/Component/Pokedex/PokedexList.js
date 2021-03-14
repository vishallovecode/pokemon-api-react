import React, { Component, useEffect, useState } from 'react';
import { fetchData } from '../../FetchApi/fetchData';
import Pagination from '../../Library/Pagination/Pagination';

import PokdexCard from './PokedexCard.js'

const  PokedexList = (props)=> {
  
  const [pokeDexList, setPokedexList]=useState([]);
  const [pageNo,setPageNo]=useState(1);
  const [totalCount, setTotalCount]=useState();

   
  useEffect( () =>{
    getPokedexList();

  },[] )
 
const getPokedexList = async (offset=0,limit=10) =>{
    const res= await fetchData (`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    setPokedexList(res.results)
    setTotalCount(res.count)
}
const onPageChange =(page) =>{
  setPageNo(page)
  setPokedexList([])
  getPokedexList(page)

}

    return (
      <div>
          
          <div className='pokedex-card-container '>
        {pokeDexList.length>=1  && <div className="pagination"> 
          <Pagination
          current ={pageNo}
          count={totalCount}
          onChange={onPageChange}
        />
        </div>}
            <div style={{margin:"auto",display:"flex",flexWrap:"wrap"}}> 
            {pokeDexList.length>=1 ?
            pokeDexList.map((item,index)=>{
              return (
                <PokdexCard
                key={index+item.name}
                name={item.name}
                url={item.url}
              />
              )
            })
 
           : <h1>Loading...........</h1>}
         
          

          </div>
          </div>
         
      </div>
    );
  
}


export default PokedexList;
