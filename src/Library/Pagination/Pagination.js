import React, { useEffect, useState, useRef } from "react";
 
 
 import './Pagination.scss'
const Pagination = props => {
  // const [current,setCurrent] =useState(3);
  const { current, onChange, count } = props;
  // let count =101;
  let pageSize = 10;
  // let noOfPages = Math.ceil(count / pageSize);

  const divisible = count % pageSize === 0;
  const valueToBeAdded = divisible ? 0 : 1;
  let noOfPages = Math.floor(count / pageSize) + valueToBeAdded;
  const PAGINATION_WIDTH = 2; // i.e show two elements ahead and two elements behind
  const getPrevButtons = (item, PAGINATION_WIDTH) => {
    let prevButtons = [];
    let prevItem = item - 1;
    while (prevItem > 0 && PAGINATION_WIDTH > 0) {
      prevButtons.push(prevItem);
      prevItem--;
      PAGINATION_WIDTH--;
    }
    return prevButtons;
  };

 

   const nextButtons = (item, PAGINATION_WIDTH, noOfPages) => {
    let nextButtons = [];
    while (item < noOfPages && PAGINATION_WIDTH > 0) {
      item++;
      PAGINATION_WIDTH--;
      nextButtons.push(item);
    }
    return nextButtons;
  };
  let buttons = [
    ...getPrevButtons(current, PAGINATION_WIDTH).reverse(),
    current,
    ...nextButtons(current, PAGINATION_WIDTH, noOfPages)
  ];
  console.log(
    getPrevButtons(current, PAGINATION_WIDTH),
    current,
    nextButtons(current, PAGINATION_WIDTH, noOfPages)
  );
  return (
    <>
      <div className='btn-group div-btn-group'> 
       
          <button style={{fontWeight:1000  }}
             disabled={current==1}
             className={current==1  ? 'auto-cursor left-toggle-disabled ':'btn-grp left-toggle'}
             onClick={() => {
              onChange(current-1);
            }}
          >
            
          </button>
      
        {buttons.map(element => (

          (element == current) ? (<button style={{cursor:"auto"}}
          className={element == current ? "ActiveButton" : "btn-group"}
          > {element}</button>) :

            <button
            className={element == current ? "ActiveButton" : "btn-group"}
              onClick={() => {
                onChange(element);
              }}
            >
              {element}
            </button>
        ))}
        <button style={{fontWeight:1000} }
        className={current==noOfPages? 'right-toggle-disabled' :'right-toggle'}
        disabled={current==noOfPages}
          onClick={() => {
            onChange(current+1);
          }}
        >
        
        </button>
        
      </div>
    </>
  );
};
Pagination.cname = "Pagination";
export default Pagination;