/**
 * Connect to component's model
 * @param {Object} state 
 * @param {Object} actions 
 */
const bootConnect = (state, actions) =>
  (component, namespace) => component({
    state: state[namespace],
    actions: actions[namespace],
  })

export default bootConnect