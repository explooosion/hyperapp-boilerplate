import './index.scss'
import { h, app } from 'hyperapp'
import { Link, Route, location } from "@hyperapp/router"
import { state, actions } from './models/index'
import bootConnect from './utils/bootConnect'

import Home from './routes/Home'
import About from './routes/About'
import Article from './routes/Article'

const view = (state, actions) => {
  const connect = bootConnect(state, actions)
  return (
    <div class="wrapper">
      <ul class="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/article">Article</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" render={connect(Home, 'counter')} />
      <Route path="/about" render={connect(About, 'todo')} />
      <Route parent path="/article" render={Article} />
    </div>
  )
}


const main = app(state, actions, view, document.body)

const unsubscribe = location.subscribe(main.location)