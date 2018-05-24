import { h } from 'hyperapp'

import Counter from '../components/Counter'

const Home = props => () => (
  <div>
    <h2>Home</h2>
    <Counter state={props.state} actions={props.actions} />
  </div>
)

export default Home