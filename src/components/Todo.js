import { h } from 'hyperapp'
import './Todo.scss'
import TodoItem from './TodoItem'

const FilterInfo = { All: 0, Todo: 1, Done: 2 }

const Todo = ({ state, actions }) => (
  <div class="todo">
    <h2>Todo</h2>
    <p>
      {Object.keys(FilterInfo)
        .filter(key => FilterInfo[key] !== state.filter)
        .map(key => (
          <span>
            <a
              href="#"
              onclick={() =>
                actions.filter({
                  value: FilterInfo[key]
                })
              }
            >
              {key}
            </a>{" "}
          </span>
        ))}
    </p>
    <div class="flex">
      <input
        type="text"
        onkeyup={e => (e.keyCode === 13 ? actions.add() : "")}
        oninput={e => actions.input({ value: e.target.value })}
        value={state.input}
        placeholder={state.placeholder}
      />
      <button onclick={actions.add}>＋</button>
    </div>
    <p>
      <ul>
        {state.todos
          .filter(
            t =>
              state.filter === FilterInfo.Done
                ? t.done
                : state.filter === FilterInfo.Todo
                  ? !t.done
                  : state.filter === FilterInfo.All
          )
          .map(t => (
            <TodoItem
              id={t.id}
              value={t.value}
              done={t.done}
              toggle={actions.toggle}
            />
          ))}
      </ul>
    </p>
  </div>
)

export default Todo