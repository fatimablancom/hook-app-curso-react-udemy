import React from 'react';

export const ShowIncrement = React.memo(({increment}) => {

    console.log('Show increment Me volví a generar : (')

  return (
    <>
        <button
            className='btn btn-primary'
            onClick={() => {
                increment(5)
            }}
        >+</button>
    </>
  )
})
