import { h } from 'hyperapp'
import { location } from "@hyperapp/router"

import Counter from './Counter'
import Todo from './Todo'
import Form from './Form'

/**
 * Add your models 
 * Ex. { namespace: model }
 */
const models = {
  counter: Counter,
  todo: Todo,
  form: Form,
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