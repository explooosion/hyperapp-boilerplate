import { h } from 'hyperapp'

const Counter = {
  state: {
    count: 0,
  },
  actions: {
    down: value => state => ({ count: state.count - value }),
    up: value => state => ({ count: state.count + value })
  }
}

export default Counter