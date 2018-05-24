import { h } from 'hyperapp'

const Todo = {
  state: {
    todos: [],
    filter: 0,
    input: '',
    placeholder: 'Do that thing...',
  },
  actions: {
    add: () => state => ({
      input: '',
      todos: state.todos.concat({
        done: false,
        value: state.input,
        id: state.todos.length + 1
      })
    }),
    toggle: ({ id, value }) => state => ({
      todos: state.todos.map(
        t => (id === t.id ? Object.assign({}, t, { done: !value }) : t)
      )
    }),
    input: ({ value }) => ({ input: value }),
    filter: ({ value }) => ({ filter: value })
  }
}

export default Todo