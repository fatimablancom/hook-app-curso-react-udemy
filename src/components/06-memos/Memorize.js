import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small';

export const Memorize = () => {
    const {counter, increment, decrement} = useCounter(10);
    const [show, setShow] = useState(true);
  return (
    <>
        <h2>Memorize</h2>
        <h4>Contador:<Small value={counter}/></h4>
        <button className='btn btn-primary' onClick={() => {increment()}}>+</button>

        <button
            className='btn btn-outline-primary'
            style={{marginLeft: '20px'}}
            onClick={() => {
                setShow(!show)
            }}
        >
            show/Hide {JSON.stringify(show)}
        </button>
    </>

  )
}
