import * as m from 'mithril';

// Import namespaces
import { App } from '../namespaces/App';
import { Api } from '../namespaces/Api';

// Import Layout
import MainLayout from '../layouts/Main';

// Import components
import LoginComponent from '../components/Login';
import OnsenComponent from '../components/Onsen';

export default class LoginPage {
  view (vnode: any) {
    return m(MainLayout, {
      class: 'app',
      main: m(OnsenComponent)
    });
  }
}
