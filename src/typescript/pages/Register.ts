import * as m from 'mithril';

// Import namespaces
import { App } from '../namespaces/App';
import { Api } from '../namespaces/Api';

// Import Layout
import MainLayout from '../layouts/Main';

// Import components
import RegisterComponent from '../components/Register';
import ToolbarComponent from '../components/Toolbar';
import SidebarComponent from '../components/Sidebar';
import TabbarComponent from '../components/Tabbar';

export default class RegisterPage {
  view (vnode: any) {
    return m(MainLayout, {
      class: 'app',
      toolBar: m(ToolbarComponent),
      sidebar: m(SidebarComponent),
      main: m(RegisterComponent),
      tabBar: m(TabbarComponent)
    });
  }
}
