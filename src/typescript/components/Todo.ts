import * as m from 'mithril';

// Import namespaces
import { App } from '../namespaces/App';

// View
export default class TodoComponent {
    edit: boolean;
    _renderTodoValue(editStatus: boolean, vnode: any) {
        if (!editStatus) {
            return m('p.todo-value', vnode.attrs.todo.value)
        } else {
            return m('input#todoUpdateInput.text-input.text-input--underbar', {value: vnode.attrs.todo.value})
        }
    }
    _renderEditButton (editStatus: boolean, vnode: any, that: any) {
        if (!editStatus) {
            return  (
                m('div.button.button--light', {onclick: (e) => { that.edit = !that.edit; }}, [
                    m('ons-icon', {icon: 'ion-edit, material: md-edit'})
                ])
            )
        } else {
            return (
                m('div.button', {onclick: (e) => { 
                    vnode.attrs.onUpdate(e, vnode.attrs.todo) 
                    that.edit = !that.edit;
                }}, [
                    m('ons-icon', {icon: 'ion-checkmark, material: md-check'})
                ])
            )
        }
    }
    view (vnode: any) {
        return [
            m('li.list-item', [
                m('div.list-item__left', [
                    m('label.checkbox', [
                        m('input.checkbox__input', {type: 'checkbox', name: 'c', onclick: () => {vnode.attrs.onDelete(vnode.attrs.todo)}, checked: false}),
                        m('div.checkbox__checkmark')
                    ])
                ]),
                m('div.list-item__center', [
                    this._renderTodoValue(this.edit, vnode)
                ]),
                m('div.list-item__right', [
                   this._renderEditButton(this.edit, vnode, this)
                ])
            ])
        ]
    }
}
