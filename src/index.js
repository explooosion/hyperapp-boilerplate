import './index.scss'
import { h, app } from 'hyperapp'
import { Link, Route, location } from "@hyperapp/router"
import { state, actions } from './models/index'

import Home from './routes/Home'
import About from './routes/About'
import Article from './routes/Article'

import Counter from './components/Counter'

const view = (state, actions) => (
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
    <Counter state={state} actions={actions} />
    <Route path="/" render={Home} />
    <Route path="/about" render={About} />
    <Route parent path="/article" render={Article} />
  </div>
)

const main = app(state, actions, view, document.body)

const unsubscribe = location.subscribe(main.location)