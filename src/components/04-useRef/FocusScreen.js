import React, { useRef } from 'react';
import '../02-useEffect/effects.css';

export const FocusScreen = () => {

    const inputRef = useRef();
    console.log(inputRef, 'ref')

    const handleClick = () => {
       inputRef.current.select();
    }

  return (
    <>
        <h2>Component: FocusScreen</h2>
        <input 
            type="text"
            placeholder='Su nombre'
            ref={inputRef}
        />

        <button  style={{marginLeft: '20px'}} 
            className='btn btn-outline-primary'
            onClick={handleClick}
        >
            Focus
        </button>
    </>

  )
}
