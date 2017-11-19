import * as m from 'mithril';

// View
export default class LoginComponent {
    _submitForm (e: any) {
        e.preventDefault();
        console.log('Logging In... ', e);
        window.location.href = '#!/todo';
    }
    view (vnode: any) {
        return [
            m('ons-card', {style: {marginTop: '10%'}},  [
                m('div.card-title', [
                    m('h1.login-title', 'Login')
                ]),
                m('div.card-content', [
                    m('form#login-form', {style: {backgroundColor: 'white'}, onsubmit: (e) => {this._submitForm(e)}}, [
                        m('input#username-input.text-input.text-input--underbar',
                        { type: 'text', name: 'username-input', placeholder:'Username', style:{ width: '100%', marginBottom: '30px' }}),
                        m('input#username-input.text-input.text-input--underbar',
                        { type: 'text', name: 'username-input', placeholder:'Password', style:{ width: '100%', marginBottom: '20px' }}),
                        m('div.form-button-wrap', {style:{marginTop: '10px'}}, [
                            m('button#login-button.button--large--cta', {type: 'sbumit'}, 'Login'),
                        ])
                    ])
                ]),
                m('div', [
                    m('a.button.button--quiet', {href: '#!/register'}, 'Need an account?')
                ])
            ])
        ];
    }
}
