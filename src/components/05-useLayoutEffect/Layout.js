import React, { useLayoutEffect, useRef, useState } from 'react';
import './lasyout.css';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

export const Layout = () => {


    const {counter, increment, decrement} = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({})

    useLayoutEffect(() => {
        console.log(pTag?.current?.getBoundingClientRect());
        setBoxSize(pTag?.current?.getBoundingClientRect());
    }, [data])



  return (
    <>
        <h2>Component: LayoutEffect</h2>

  
        
        <blockquote className='layout-blockquote blockquote text-right'>
            {data?.map(el => (
                <div  key={el.author}>
                    <p 
                        ref={pTag}
                        className=''
                    >
                        {el.quote}
                    </p>
                </div>
            ))}
            
        </blockquote>

        <pre>{JSON.stringify(boxSize, null, 3)}</pre>
        

        <button style={{marginRight: '20px'}} className='btn btn-primary' onClick={() => {increment(1)}}>
            Siguiente quote
        </button>
        
        <button className='btn btn-primary' onClick={() => {decrement(1)}}>
            Anterior quote
        </button>
    </>
    
  )
}
