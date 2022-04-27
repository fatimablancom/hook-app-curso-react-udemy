import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import './index.css';

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter(0);
    
  return (
    <>
        <h2>Counter With Custom Hook: {state}</h2>
        <div className="button-container">
          <button className='btn btn-secondary' onClick={ () => {increment(1)}}>+1</button>
          <button className='btn btn-secondary' onClick={reset}>Reset</button>
          <button className='btn btn-secondary' onClick={ () => {decrement(2)}}>-1</button>
        </div>
    </>
  )
}
