import { h } from 'hyperapp'

const Counter = ({ state, actions }) => (
  <div>
    <h1>{state.count}</h1>
    <button onclick={() => actions.down(1)} disabled={state.count <= 0}>ー</button>
    <button onclick={() => actions.up(1)}>＋</button>
  </div>
)

export default Counter