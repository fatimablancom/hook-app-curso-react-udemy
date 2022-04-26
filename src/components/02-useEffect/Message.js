import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({
        x: 0,
        y: 0
    })

    const {x, y} = coords;

    const mouseMove = (e)=> {
        const coordsEvent = {
            x: e.x,
            y: e.y
        };

        setCoords(coordsEvent)
    } 

    useEffect(() => {
      window.addEventListener('mousemove', mouseMove);
    
      return () => {
        window.removeEventListener('mousemove', mouseMove)
        console.log('componente desmontado')
      }
    }, [])
    
  return (
    <div>
        <h3>Hola desde componente Message</h3>
        <p>X:{x}</p>
        <p>Y:{y}</p>
    </div>
  )
}
