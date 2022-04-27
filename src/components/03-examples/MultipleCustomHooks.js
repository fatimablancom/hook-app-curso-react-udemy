import React from 'react';
import '../02-useEffect/effects.css';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

export const MultipleCustomHooks = () => {


    const {counter, increment, decrement} = useCounter(1);
    const {loading, error, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);



  return (
    <>
        <h2>Component: MultipleCustomHooks</h2>

        {loading ? 
        
            (<div className='alert alert-info text-center'>
                Loading
            </div>) :

            (<blockquote className='blockquote text-right'>
                {data?.map(el => (
                    <div  key={el.author}>
                        <p className=''>{el.quote}o</p>
                        <footer className='blockquote-footer'>{el.author}</footer>
                    </div>
                ))}
                
            </blockquote>)
        }

        <button className='btn btn-primary' onClick={() => {increment(1)}}>
            Siguiente quote
        </button>
        
        <button className='btn btn-primary' onClick={() => {decrement(1)}}>
            Anterior quote
        </button>
    </>
    
  )
}
