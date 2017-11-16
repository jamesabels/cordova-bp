import * as m from 'mithril';

// Import namespaces
import { App } from '../namespaces/App';
import { Api } from '../namespaces/Api';

// Import Layout
import MainLayout from '../layouts/Main';

// Import components
import TodoListComponent from '../components/TodoList';

export default class HomePage {
  oninit (vnode: any) {
    Api.getUsers();
  }
  view (vnode: any) {
    return m(MainLayout, {
      class: 'app',
      main: m(TodoListComponent, {
        title: 'Home',
        todos: App.state.todos
      })
    });
  }
}
