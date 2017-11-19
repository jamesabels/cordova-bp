import * as m from 'mithril';

// View
export default class SidebarComponent {
    _navigate (path: string) {
        window.location.href = path;
    }
    view (vnode: any) {
        return [
            m('ons-page', [
                m('ons-list', [
                    m('ons-list-item', {href: '#!/', onclick: () => {this._navigate('#!/')}}, 'Logout'),
                ])
            ])
        ]
    }
}
