import React, { useState } from 'react'

export const CounterApp = () => {
    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40
    })

    const {counter1, counter2 } = state;
    const handleSum = () => {

        setState({
            ...state,
            counter1: counter1 + 1,
        });
    }

    // console.log(counter1, 'counter')


  return (
    <>
    <h4> Counter1 {counter1}</h4>
    <h4> Counter2 {counter2}</h4>

    <button className='btn btn-primary' onClick={() => {handleSum()}}>+1</button>
    </>
  )
}
