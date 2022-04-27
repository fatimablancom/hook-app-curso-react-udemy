import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

export const RealExampleRef = () => {

    const [show, setShow] = useState(false)

  return (
      <>
        <h2>Component: RealExampleRef: con MultipleCustomHooks dentro</h2>
        {show && <MultipleCustomHooks/>}

        <button className='btn btn-primary' style={{marginLeft: '20px'}} onClick={() => (setShow(!show))}>Show/Hide</button>
        
      </>
  )
}
