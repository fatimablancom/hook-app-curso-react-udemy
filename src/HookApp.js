import React from 'react'
import { SimpleForm } from './components/01-useState/02-useEffect/SimpleForm'
import { CounterApp } from './components/01-useState/CounterApp'
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook'

export const HookApp = () => {
  return (
    <>
        <CounterApp />
        <hr/>
        <CounterWithCustomHook />
        <hr/>
        <SimpleForm />
    </>

  )
}
