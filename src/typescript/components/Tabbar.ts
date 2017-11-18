import * as m from 'mithril';

// Import namespaces
import { App } from '../namespaces/App';

// View
export default class SidebarComponent {
    _showTodoDialog () {
        let todoDialog: any = document.querySelector('#todoInputDialog');
        todoDialog.show();
    }
    view (vnode: any) {
        return [
            m('div.tabbar', [
                m('label.tabbar__item.center', [
                    m('button.tabbar__button', {onclick: () => {App.showDialog('#todoInputDialog')}}, [
                        m('ons-icon.tabbar__icon', {icon:'ion-plus, material:md-plus'})
                    ])
                ])
            ])
        ]
    }
}
