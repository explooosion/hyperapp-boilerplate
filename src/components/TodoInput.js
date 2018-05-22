import { h, app } from 'hyperapp'

const TodoInput = ({ value, placeholder, input, add }) => (
    <div class="flex">
        <input
            type="text"
            onkeyup={e => (e.keyCode === 13 ? add() : '')}
            oninput={e => input({ value: e.target.value })}
            value={value}
            placeholder={placeholder}
        />
        <button onclick={add}>＋</button>
    </div>
)


export {
    TodoInput,
}

