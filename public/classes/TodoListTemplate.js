export class TodoListTemplate {
    constructor(container, todos) {
        this.container = container;
        this.todos = todos;
    }
    renderAll() {
        this.container.innerHTML = '';
        for (let todo of this.todos) {
            this.render(todo);
        }
    }
    render(todo) {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.setAttribute('data-id', todo.id);
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.isChecked;
        checkbox.classList.add('todo-checkbox');
        const text = document.createElement('span');
        text.innerText = todo.text;
        text.classList.add('todo-text');
        if (todo.isChecked) {
            text.style.textDecoration = 'line-through';
            checkbox.style.accentColor = 'blue';
        }
        checkbox.addEventListener('change', () => {
            todo.toggle();
            if (todo.isChecked) {
                text.style.textDecoration = 'line-through';
                checkbox.style.accentColor = 'blue';
            }
            else {
                text.style.textDecoration = 'none';
                checkbox.style.accentColor = '';
            }
        });
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '🗑️';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            this.todos = this.todos.filter(t => t.id !== todo.id);
            this.save();
            this.renderAll();
        });
        li.append(checkbox, text, deleteBtn);
        this.container.appendChild(li);
    }
    save() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }
    getTodos() {
        return this.todos;
    }
}
