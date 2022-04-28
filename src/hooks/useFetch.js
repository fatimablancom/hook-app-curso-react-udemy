import React, { useState, useEffect, useRef } from 'react'

export const useFetch = (url) => {
    
    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null});

    useEffect(() => {
   
      return () => {
        isMounted.current = false;
      }
    }, [])
    

    useEffect(() => {
    
        setState({ data: null, loading:true, error: null})

        fetch(url)
            .then( resp => resp.json())
            .then(data => {

                setTimeout(() => {

                    if(isMounted.current) {
                        setState({
                            loading: false,
                            error: null,
                            data: data
        
                        })
                    } else {
                        console.log('No se llama a setState')
                    }
    
                }, 4000);

                // console.log(data, 'data')
               
            })

    
    }, [url])

    return state;
}
