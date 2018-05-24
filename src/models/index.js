import { h } from 'hyperapp'
import { location } from "@hyperapp/router"

const state = {
  count: 0,
  location: location.state
}

const actions = {
  location: location.actions,
  down: value => state => ({ count: state.count - value }),
  up: value => state => ({ count: state.count + value })
}

export {
  state,
  actions,
}