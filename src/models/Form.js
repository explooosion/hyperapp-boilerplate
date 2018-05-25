import { h } from 'hyperapp'

import Activity from '../service/Activity'

const Form = {
  state: {
    value: 'hexscholl@test.com',
    status: '',
  },
  actions: {
    input: ({ value }) => ({ value: value }),
    reduce: fn => (state, actions) => fn(state, actions),
    send: () => async (state, actions) => {
      const data = await Activity.GET_isSignUp({ 'email': state.value })
      actions.reduce(state => ({
        status: data.message
      }))
    },
  }
}

export default Form