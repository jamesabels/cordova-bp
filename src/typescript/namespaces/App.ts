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
  export function setState(stateKey: string, value: any) {
    state[stateKey] = value;
  }
}
