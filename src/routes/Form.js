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
    <button type="button" onclick={actions.send}>Send</button>
    <p>{state.status}</p>
  </div>
)

export default Form