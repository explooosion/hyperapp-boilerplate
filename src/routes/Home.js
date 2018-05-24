import { h } from 'hyperapp'

import Counter from '../components/Counter'

const Home = ({ state, actions }) => () => (
  <div>
    <h1>Home</h1>
    <Counter state={state} actions={actions} />
  </div>
)

export default Home