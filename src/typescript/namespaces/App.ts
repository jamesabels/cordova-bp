interface State {
  sidebar: boolean;
  users: any;
  todos: Array<object>;
}

export namespace App {
  export const state: State = {
    sidebar: true,
    users: [],
    todos: []
  };
  export function showDialog (element: string) {
    let el: any = document.querySelector(element);
    el.show();
  }
  export function hideDialog (element: string) {
    let el: any = document.querySelector(element);
    el.hide();
  }
  export function setState(stateKey: string, value: any) {
    state[stateKey] = value;
  }
}
