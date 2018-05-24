import { h } from 'hyperapp'

const Form = {
  state: {
    value: 'hyperapp',
  },
  actions: {
    input: ({ value }) => ({ value: value }),
  }
}

export default Form