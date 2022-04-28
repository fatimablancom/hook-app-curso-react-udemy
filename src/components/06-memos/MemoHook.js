import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado';


export const MemoHook = () => {
    const {counter, increment} = useCounter(2000);
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <>
        <h2>MemoHook Component</h2>
        <h4>Contador:<small>{counter}</small></h4>

        <p>{memoProcesoPesado}</p>

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
