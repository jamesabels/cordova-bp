import * as m from 'mithril';

// View
export default class EmptyComponent {
    view (vnode: any) {
        return [
            m('div.empty-wrap', {style: {backgroundColor: '#eceff1', textAlign:'center', padding: '50px 0 0 0'} }, [
                m('div.empty-icon', [
                    m(`ons-icon`, {icon: 'ion-checkmark', style: {fontSize: '50px', color: 'lightgrey'}})
                ]),
                m('h3.empty-title', {style: {color: 'lightgrey'}}, vnode.attrs.title),
                m('p.empty-subtitle', {style: {color: 'lightgrey'}}, vnode.attrs.subtitle),
            ])
        ]
    }
}
