import * as m from 'mithril';

// View
export default class SidebarComponent {
    view (vnode: any) {
        return [
            m('ons-page', [
                m('ons-list', [
                    m('ons-list-item', {onclick: () => {}}, 'Home'),
                    m('ons-list-item', {onclick: () => {}}, 'Settings'),
                    m('ons-list-item', {onclick: () => {}}, 'About')
                ])
            ])
        ]
    }
}
