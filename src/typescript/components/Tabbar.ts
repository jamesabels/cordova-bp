import * as m from 'mithril';

// View
export default class SidebarComponent {
    view (vnode: any) {
        return [
            m('div.tabbar', [
                m('label.tabbar__item.center', [
                    m('button.tabbar__button', [
                        m('ons-icon.tabbar__icon', {icon:'ion-plus, material:md-plus'})
                    ])
                ])
            ])
        ]
    }
}
