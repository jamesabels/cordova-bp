import * as m from 'mithril';
declare var ons: any;

// Import namespaces
import { App } from '../namespaces/App';
import { Http } from '../namespaces/Http';

export default class MainLayout {
  _renderError (verb: string, message: string) {
    ons.notification.toast({
      message: `${verb}: ${message}`,
      timeout: '2000'
    });
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
    if (Http.state.error.length > 0) {
      this._renderError(
        Http.state.error[0].verb,
        Http.state.error[0].message
      )    
    }
    return this._renderLayout(vnode, this)
  }
}
