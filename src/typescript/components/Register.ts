import * as m from 'mithril';

// View
export default class RegisterComponent {
    _submitForm (e: any) {
        e.preventDefault();
        console.log('Signing Up... ', e);
        window.location.href = '#!/todo';
    }
    view (vnode: any) {
        return [
            m('ons-card', {style: {marginTop: '8%'}},  [
                m('div.card-title', [
                    m('h1.login-title', 'Register')
                ]),
                m('form#login-form.form-group.panel-body', {style: {backgroundColor: 'white'}, onsubmit: (e) => {this._submitForm(e)}}, [
                    m('input#email-input.text-input.text-input--underbar', 
                    {type: 'email', name: 'email-input', placeholder:'Email', style:{ width: '100%', marginBottom: '30px' }}),
                    m('input#first-name-input.text-input.text-input--underbar', 
                    {type: 'text', name: 'first-name-input', placeholder:'First Name', style:{ width: '100%', marginBottom: '30px' }}),
                    m('input#username-input.text-input.text-input--underbar', 
                    {type: 'text', name: 'last-name-input', placeholder:'Last Name', style:{ width: '100%', marginBottom: '30px' }}),
                    m('input#username-input.text-input.text-input--underbar', 
                    {type: 'password', name: 'password-input', placeholder:'Password', style:{ width: '100%', marginBottom: '30px' }}),
                    m('input#confirm-password-input.text-input.text-input--underbar', 
                    {type: 'password', name: 'confirm-password-input', placeholder:'Confirm Password', style:{ width: '100%', marginBottom: '30px' }}),
                    m('div.form-button-wrap', {style: {marginTop: '10px'}}, [
                        m('button#login-button.button--large--cta', {type: 'sbumit'}, 'Sign Up'),
                    ])
                ]),
                m('div', [
                    m('a.button.button--quiet', {href: '#!/login'}, 'Already have an account?')
                ])
            ])
        ];
    }
}
