import './index.scss';
import { h, app } from "hyperapp"
import { Link, Route, location } from "@hyperapp/router"

import Home from './routes/Home'
import About from './routes/About'
import Article from './routes/Article'

const state = {
  location: location.state
}

const actions = {
  location: location.actions
}

const view = state => (
  <div>
    <ul>
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

    <Route path="/" render={Home} />
    <Route path="/about" render={About} />
    <Route parent path="/article" render={Article} />
  </div>
)

const main = app(state, actions, view, document.body)

const unsubscribe = location.subscribe(main.location)