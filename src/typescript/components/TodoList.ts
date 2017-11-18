import * as m from 'mithril';

// Import namespaces
import { App } from '../namespaces/App';

// Import Components
import TodoComponent from './Todo';
import EmptyComponent from './Empty';

// Model
const state: any = {
    title: null,
    edit: false
}

// View
export default class TodoListComponent {
    _onSubmit(e: any, input: string, dialog: string) {
        e.preventDefault();
        let todoInput: any = document.querySelector(input);
        if (todoInput.value.length === 0) {
            return;
        } else if (todoInput.value.length > 0) {
            App.state.todos.push({ value: todoInput.value });
            todoInput.value = null;
        } else {
            return;
        }
        App.hideDialog(dialog);
    }
    _onDelete(todo: any) {
        let todos = App.state.todos;
        todos.splice(todos.indexOf(todo), 1);
    }
    _onUpdate(e: any, oldTodo: any) {
        e.preventDefault();
        let todos = App.state.todos;
        let input: any = document.getElementById('todoUpdateInput');

        console.log('GETTING INPUT', input.value)
        // Get original object
        let index = todos.indexOf(oldTodo);

        // Make sure input is not empty
        if (input.value.length === 0) {
            console.log('Checking if input is empty ', input.value);
            return;
        } else if (input.value.length > 0) {
            todos[index] = { value: input.value };
            state.edit = !state.edit;
        } else {
            return;
        }
    }
    _renderTodos(that: any, todos: any, editState: boolean) {
        if (todos.length > 0) {
            return todos.map(function (todo: any) {
                return (
                    m('ul.list', [
                        m(TodoComponent, {
                            todo: todo,
                            onDelete: that._onDelete,
                            onUpdate: that._onUpdate
                        })
                    ])
                )
            })
        } else {
            return [
                m(EmptyComponent, {
                    verb: 'success',
                    icon: 'check',
                    title: 'You are out of things to do',
                    subtitle: `Assuming you're not a liar`,
                    action: null
                })
            ]
        }
    }
    _renderInputDialog(that: any) {
        return (
            m('div.dialog-wrap', [
                m('ons-alert-dialog#todoInputDialog', {cancelable: true}, [                    
                    m('div.alert-dialog-title', [
                        'Add Todo'
                    ]),
                    m('div.alert-dialog-content', [
                        m('label', 'What do you have to do?'),
                        m('input#todoDialogInput.text-input.text-input--underbar')
                    ]),
                    m('div.alert-dialog-footer', [
                        m('button.alert-dialog-button alert-dialog-button--primal', {onclick: (e) => {that._onSubmit(e, '#todoDialogInput', '#todoInputDialog')}}, 'Add'),
                        m('button.alert-dialog-button alert-dialog-button--primal', {onclick: (e) => {App.hideDialog('#todoInputDialog')}}, 'Cancel')
                    ])
                ])
            ])
        )
    }
    view(vnode: any) {
        if (vnode.attrs.todos.length > 0) {
            return [
                m('div.todo-wrap', [
                    this._renderInputDialog(this),
                    this._renderTodos(this, vnode.attrs.todos, state.edit)
                ])
            ]
        } else {
            return [
                m('div.todo-wrap', [
                    this._renderInputDialog(this),
                    this._renderTodos(this, vnode.attrs.todos, state.edit)
                ])
            ]
        }
    }
}
