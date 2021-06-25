import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Root from './config/root'
import Main from './components/main'

const target = document.getElementById('root')

const render = () => {
  ;(module.hot ? ReactDOM.render : ReactDOM.hydrate)(
    <Router>
      <Main />
    </Router>,
    target
  )
}

render(Root)

if (module.hot) {
  module.hot.accept('./config/root', () => {
    const newApp = require('./config/root').default
    render(newApp)
  })
}
