enum Constants {
  PRESS_NUM,
  ENTER
}

interface IPressNum {
  type: Constants.PRESS_NUM;
  payload: string;
}

interface IEnter {
  type: Constants.ENTER;
}

type Actions = IPressNum | IEnter;

export const pressNum = (n: string): IPressNum => ({
  type: Constants.PRESS_NUM,
  payload: n
});

export const enter = (): IEnter => ({
  type: Constants.ENTER
});

enum InputState {
  replace,
  append
}

const initialState = {
  stack: [],
  inputState: InputState.replace
};

export interface ICalculatorState {
  stack: string[];
  inputState: InputState;
}

const reducer = (state: ICalculatorState = initialState, action: Actions) => {
  switch (action.type) {
    case Constants.ENTER:
      return {
        stack: [state.stack[0] || '0', ...state.stack],
        inputState: InputState.replace
      };

    case Constants.PRESS_NUM:
      if (state.inputState === InputState.append) {
        return {
          stack: [
            (state.stack[0] || '0') + action.payload,
            ...state.stack.slice(1)
          ],
          inputState: InputState.append
        };
      } else if (state.inputState === InputState.replace) {
        return {
          stack: [action.payload, ...state.stack.slice(1)],
          inputState: InputState.append
        };
      }

    default:
      return state;
  }
};

export default reducer;
