import * as m from 'mithril';

// Import namespaces
import { Api } from './Api';

interface Error {
    verb: string;
    message: any;
}

interface State {
    baseUrl: string | null;
    apiKey: string | null;
    error: Array<Error>;
}

export namespace Http {
    export const state: State = {
        baseUrl: 'https://jsonplaceholder.typicode.com',
        apiKey: null,
        error: []
    };
    export function getRequest(url: string) {
        return m.request({
            method: 'GET',
            headers: {},
            url: `${state.baseUrl}${url}`
        })
        .catch(function (error) {
            console.log('There was an error', error);
            state.error.push({verb: 'ERROR', message: 'Network error, please try again'});
        })
    }
    export function postRequest(url: string, data: any) {
        return m.request({
            method: 'POST',
            headers: {},
            url: `${state.baseUrl}${url}`,
            data
        })
        .catch(function (error) {
            console.log('There was an error', error);
            state.error.push({verb: 'ERROR', message: 'Network error, please try again'});
        })
    }
    export function putRequest(url: string, data: any) {
        return m.request({
            method: 'PUT',
            headers: {},
            url: `${state.baseUrl}${url}`,
            data
        })
        .catch(function (error) {
            console.log('There was an error', error);
            state.error.push({verb: 'ERROR', message: 'Network error, please try again'});
        })
    }
    export function deleteRequest(url: string) {
        return m.request({
            method: 'DELETE',
            headers: {},
            url: `${state.baseUrl}${url}`
        })
        .catch(function (error) {
            console.log('There was an error', error);
            state.error.push({verb: 'ERROR', message: 'Network error, please try again'});
        })
    }
}