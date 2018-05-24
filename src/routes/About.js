import { h } from 'hyperapp'

import Todo from '../components/Todo'

const About = props => () => (
  <div>
    <h1>About</h1>
    <Todo state={props.state} actions={props.actions} />
  </div>
)

export default About