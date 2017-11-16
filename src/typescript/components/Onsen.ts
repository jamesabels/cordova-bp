import * as m from 'mithril';
declare var ons: any;

// View
export default class OnsenComponent {
    _onClick () {
        ons.notification.alert('Hello World');
    }
    view (vnode: any) {
        return [
            m('ons-page#login-page', {}, [
                m('ons-toolbar', [
                    m('div.center'),
                    m('div.right', [
                        m('ons-toolbar-button', [
                            m('ons-icon', {icon: 'ion-ios-more, material:md-more-vert'})
                        ])
                    ])
                ]),
                m('div.tabbar', [
                    m('label.tabbar__item.center', [
                        m('button.tabbar__button', {onclick: () => {this._onClick()}}, [
                            m('ons-icon.tabbar__icon', {icon:'ion-plus, material:md-plus'})
                        ])
                    ])
                ])
            ])
        ]
    }
}
