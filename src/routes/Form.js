import { h } from 'hyperapp'

const Form = ({ state, actions }) => () => (
  <div>
    <h1>Form</h1>
    <p>{state.value}</p>
    <input
      type="text"
      oninput={e => actions.input({ value: e.target.value })}
      value={state.value}
    />
  </div>
)

export default Form