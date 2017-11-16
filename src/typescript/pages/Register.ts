import * as m from 'mithril';

// Import namespaces
import { App } from '../namespaces/App';
import { Api } from '../namespaces/Api';

// Import Layout
import MainLayout from '../layouts/Main';

// Import components
import RegisterComponent from '../components/Register';

export default class RegisterPage {
  view (vnode: any) {
    return m(MainLayout, {
      class: 'app',
      main: m(RegisterComponent)
    });
  }
}
