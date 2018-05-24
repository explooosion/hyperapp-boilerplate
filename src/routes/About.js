import { h } from 'hyperapp'

import Todo from '../components/Todo'

const About = ({ state, actions }) => () => (
  <div>
    <h1>About</h1>
    <Todo state={state} actions={actions} />
  </div>
)

export default About