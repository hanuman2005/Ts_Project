import { TodoItem } from './classes/TodoItem.js';
import { TodoListTemplate } from './classes/TodoListTemplate.js';

const form = document.querySelector('.new-task-form') as HTMLFormElement;
const input = document.querySelector('#new-task-title') as HTMLInputElement;
const ul = document.querySelector('ul')!;
const saveBtn = document.querySelector('#save-btn') as HTMLButtonElement;

console.log(form, input, ul, saveBtn);

//Load from localStorage as plain objects and convert
let todosData = JSON.parse(localStorage.getItem('todos') || '[]');
let todos: TodoItem[] = todosData.map((t: any) => new TodoItem(t.id, t.text, t.isChecked));

//Initialize and render
const todoList = new TodoListTemplate(ul, todos);
todoList.renderAll();

// Add new todo
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  const newTodo = new TodoItem(crypto.randomUUID(), text, false);
  todos.push(newTodo);
  todoList.render(newTodo);
  input.value = '';
});

//Save to localStorage
saveBtn.addEventListener('click', () => {
  localStorage.setItem('todos', JSON.stringify(todos.map(t => t.toJSON())));
  alert("Todos saved!");
});
