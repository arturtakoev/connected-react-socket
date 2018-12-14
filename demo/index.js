/***  examples/src/index.js ***/
/* eslint-disable */
import React from 'react'
import { render } from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'

import { ConnectedSocket,withSocket } from '../src'
import store  from './store'

import {socket} from'./socket'

const Display = (props) =>{
  const {socketEvent} = props
  console.log(socketEvent)
  return (<div>
    <div>{socketEvent && socketEvent.type}</div>
    <div>{socketEvent && socketEvent.data[0]}</div>
  </div>)
}

const DisplayEvent = withSocket(Display)

const App = () => (
  <ReduxProvider store={store}>
    <ConnectedSocket socket={socket}>
      <DisplayEvent/>
    </ConnectedSocket>
  </ReduxProvider>
)
render(<App />, document.getElementById("root"))
