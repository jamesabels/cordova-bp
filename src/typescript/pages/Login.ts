import * as m from 'mithril';

// Import namespaces
import { App } from '../namespaces/App';
import { Api } from '../namespaces/Api';
import { Sidebar } from '../namespaces/Sidebar';

// Import Layout
import MainLayout from '../layouts/Main';

// Import components
import LoginComponent from '../components/Login';

export default class LoginPage {
  view (vnode: any) {
    return m(MainLayout, {
      class: 'app',
      main: m(LoginComponent)
    });
  }
}
