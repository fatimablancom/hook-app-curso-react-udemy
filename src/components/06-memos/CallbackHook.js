import React, { useState, useCallback } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    const increment = useCallback((num) => {
        setCounter( c => c + num);
    },[setCounter])
    

  return (

    <>
        <h3>useCallback Hook: {counter}</h3>    

        <ShowIncrement increment={increment}/>

    </>

  )
}
