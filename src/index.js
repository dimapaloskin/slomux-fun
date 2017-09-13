import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import { createStore } from './slomux'
import { Provider } from './react-slomux'

import App from './App'
import reducers from './reducers'

ReactDOM.render(
  <Provider store={createStore(reducers, [])}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
