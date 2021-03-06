import React from 'react';
import { CounterApp } from './components/01-useState/CounterApp'
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook'
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook'
import { SimpleForm } from './components/02-useEffect/SimpleForm'
import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks'
import { FocusScreen } from './components/04-useRef/FocusScreen';
import { RealExampleRef } from './components/04-useRef/RealExampleRef';
import { Layout } from './components/05-useLayoutEffect/Layout';
import { CallbackHook } from './components/06-memos/CallbackHook';
import { MemoHook } from './components/06-memos/MemoHook';
import { Memorize } from './components/06-memos/Memorize';

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
        <hr/>
        <FocusScreen/>
        <hr/>
        <RealExampleRef/>
        <hr/>
        <Layout/>
        <hr/>
        <Memorize/>
        <hr/>
        <MemoHook />
        <hr/>
        <CallbackHook/>
    </>

  )
}
