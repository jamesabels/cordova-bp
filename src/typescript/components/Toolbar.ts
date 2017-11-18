import * as m from 'mithril';

// View
export default class ToolbarComponent {
    _openMenu () {
        let menu: any = document.getElementById('menu');
        menu.open();
    }
    view (vnode: any) {
        return [
            m('ons-toolbar', [
                m('div.center'),
                m('div.right', [
                    m('ons-toolbar-button', {onclick: () => {this._openMenu()} },  [
                        m('ons-icon', {icon: 'ion-ios-more, material:md-more-vert'})
                    ])
                ])
            ]),
        ]
    }
}
