import React from 'react';
import { CounterApp } from './components/01-useState/CounterApp'
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook'
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook'
import { SimpleForm } from './components/02-useEffect/SimpleForm'
import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks'

export const HookApp = () => {
  return (
    <>
        <CounterApp />
        <hr/>
        <CounterWithCustomHook />
        <hr/>
        <SimpleForm />
        <hr/>
        <FormWithCustomHook/>
        <hr />
        <MultipleCustomHooks/>
    </>

  )
}
