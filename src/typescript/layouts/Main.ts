import * as m from 'mithril';
declare var ons: any;

// Import components
import ErrorToast from '../components/ErrorToast';

// Import namespaces
import { App } from '../namespaces/App';
import { Api } from '../namespaces/Api';

export default class MainLayout {
  _renderError (verb: string, message: string) {
    if (Api.state.error.length > 0) {
      return m(ErrorToast, {verb, message})
    }
  }

  _renderSidebar (sidebar: boolean) {
    if (sidebar) {
      return (
        m('ons-splitter-side#menu', {side: 'right', width: '220px'}, [
          m('ons-page', [
            m('ons-list', [
              m('ons-list-item', {onclick: () => {}}, 'Home'),
              m('ons-list-item', {onclick: () => {}}, 'Settings'),
              m('ons-list-item', {onclick: () => {}}, 'About')
            ])
          ])
        ])
      );
    }
  }

  _renderLayout (vnode: any, that) {
    return m("ons-splitter", vnode.attrs, [
      m('ons-splitter-side#menu', {side: 'right', width: '220px', collapse: true, swipeable: true}, [
       vnode.attrs.sidebar
      ]),
      m('ons-splitter-content#menu-content', [
        m('ons-page#login-page', {}, [
          vnode.attrs.toolBar,
          vnode.attrs.main,
          vnode.attrs.tabBar
      ])
      ])
    ])
  }

  view (vnode: any) {
    if (Api.state.error.length > 0) {
      return (m("div#error-toast", vnode.attrs, [
        this._renderError(
          Api.state.error[0].verb,
          Api.state.error[0].message
        )
      ]),
      this._renderLayout(vnode, this)
    )
    } else {
      return this._renderLayout(vnode, this)
    }
  }
}
