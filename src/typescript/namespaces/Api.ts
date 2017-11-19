import { App } from './App';
import { Http } from './Http';

export namespace Api {
    export function getUsers () {
        Http.getRequest(`/users/`)
            .then(function (result) {
                App.setState('users', result);
            })
    }
    export function getUserById (id: string) {
        Http.getRequest(`/users/${id}`)
            .then(function (result) {
                console.log('List of users', result);
            })
    }
}