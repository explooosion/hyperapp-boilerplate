import { h } from 'hyperapp'
import { location } from "@hyperapp/router"

import Counter from './Counter'
import Todo from './Todo'

/**
 * Add your models 
 * Ex. { namespace: model }
 */
const models = {
  counter: Counter,
  todo: Todo,
}

let state = {
  location: location.state
}

let actions = {
  location: location.actions,
}

const compose = (models) => {
  Object.keys(models).forEach(namespace => {
    state[namespace] = models[namespace].state
    actions[namespace] = models[namespace].actions
  })
}

compose(models)

export {
  state, actions
}  