enum Constants {
  PRESS_NUM,
  ENTER,
  OPERATION,
  CLEAR,
  SWAP,
  TOGGLE_SIGN
}

export enum Operations {
  POW = 'pow',
  CLEAR = 'clear',
  SWAP = 'swap',
  ENTER = 'enter',
  ADD = '+',
  SUBTRACT = '-',
  MULTIPLY = 'X',
  DIVIDE = '/'
}

export enum Numbers {
  ONE = '1',
  TWO = '2',
  THREE = '3',
  FOUR = '4',
  FIVE = '5',
  SIX = '6',
  SEVEN = '7',
  EIGHT = '8',
  NINE = '9',
  ZERO = '0',
  DECIMAL = '.'
}

export enum InputState {
  replace,
  append,
  push
}

interface IPressNum {
  type: Constants.PRESS_NUM;
  payload: Numbers;
}

interface IEnter {
  type: Constants.ENTER;
}

interface IOperation {
  type: Constants.OPERATION;
  payload: Operations;
}

interface IClear {
  type: Constants.CLEAR;
}

interface ISwap {
  type: Constants.SWAP;
}

interface IToggleSign {
  type: Constants.TOGGLE_SIGN;
  payload: number;
}

type Actions = IPressNum | IEnter | IOperation | IClear | ISwap | IToggleSign;

export const pressNum = (n: Numbers): IPressNum => ({
  type: Constants.PRESS_NUM,
  payload: n
});

export const enter = (): IEnter => ({
  type: Constants.ENTER
});

export const operation = (op: Operations): IOperation => ({
  type: Constants.OPERATION,
  payload: op
});

export const clear = (): IClear => ({
  type: Constants.CLEAR
});

export const swap = (): ISwap => ({
  type: Constants.SWAP
});

export const toggleSign = (idx: number): IToggleSign => ({
  type: Constants.TOGGLE_SIGN,
  payload: idx
});

function doOperation(x: string, y: string, op: Operations): number {
  const a = parseFloat(x);
  const b = parseFloat(y);

  if (op === Operations.POW) {
    return b ** a;
  } else if (op === Operations.ADD) {
    return b + a;
  } else if (op === Operations.SUBTRACT) {
    return b - a;
  } else if (op === Operations.MULTIPLY) {
    return b * a;
  } else if (op === Operations.DIVIDE) {
    return b / a;
  }

  return 0;
}

function toggle(x: string): string {
  if (x.startsWith('-')) {
    return x.slice(1);
  }
  return `-${x}`;
}

const initialState = {
  stack: ['0', '0', '0'],
  inputState: InputState.replace
};

export interface ICalculatorState {
  stack: string[];
  inputState: InputState;
}

const reducer = (
  state: ICalculatorState = initialState,
  action: Actions
): ICalculatorState => {
  switch (action.type) {
    case Constants.TOGGLE_SIGN:
      return {
        stack: state.stack.map(
          (x, i) => (action.payload === i ? toggle(x) : x)
        ),
        inputState: state.inputState
      };

    case Constants.SWAP:
      return {
        stack: [state.stack[1], state.stack[0], ...state.stack.slice(2)],
        inputState: InputState.push
      };

    case Constants.CLEAR:
      return initialState;

    case Constants.OPERATION:
      return {
        stack: [
          `${doOperation(state.stack[0], state.stack[1], action.payload)}`,
          ...state.stack.slice(2)
        ],
        inputState: InputState.push
      };

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
      } else if (state.inputState === InputState.push) {
        return {
          stack: [action.payload, ...state.stack],
          inputState: InputState.append
        };
      }

    default:
      return state;
  }
};

export default reducer;
