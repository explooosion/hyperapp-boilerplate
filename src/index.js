import './index.scss';
import { h, app } from "hyperapp"
import { TodoItem } from './components/TodoItem'
import { TodoInput } from './components/TodoInput'

const FilterInfo = { All: 0, Todo: 1, Done: 2 }

const state = {
    todos: [],
    filter: FilterInfo.All,
    input: "",
    placeholder: "Do that thing..."
}

const view = (state, actions) => (
    <div>
        <h1>Todo</h1>
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

        <TodoInput
            value={state.input}
            placeholder={state.placeholder}
            input={actions.input}
            add={actions.add}
        />

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

const actions = {
    add: () => state => ({
        input: "",
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

app(state, actions, view, document.body)


