import React, { useEffect } from 'react';
import './effects.css';
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm ({
        name: '',
        email:'',
        password: ''
    })

    const {name, email, password} = formValues;

  useEffect(() => {
    console.log('email modificado')
  }, [email]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues)

  }
    
  return (
      <form onSubmit={handleSubmit}>
        <h2>FormWithCustomHook</h2>

        <div className='form-group'>
            <input 
                type="text"
                name="name"
                className='form-control'
                placeholder='Tu nombre'
                autoComplete='off'
                value={name}
                onChange={handleInputChange}
            />
        </div>

        <div className='form-group'>
            <input 
                type="text"
                name="email"
                className='form-control'
                placeholder='Email'
                autoComplete='off'
                value={email}
                onChange={handleInputChange}
            />
        </div>

        <div className='form-group'>
            <input 
                type="password"
                name="password"
                className='form-control'
                placeholder='******'
                autoComplete='off'
                value={password}
                onChange={handleInputChange}
            />
        </div>

        <button typeof='submit' className='btn btn-primary'>Guardar</button>
      </form>
  )
}

