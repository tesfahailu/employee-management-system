import React from 'react';

const initialState = {
  avatarUrl: '',
};

export const GlobalContext = React.createContext<
  [State, React.Dispatch<Action>]
>([
  initialState,
  () => {
    throw new Error('Forgot to wrap component in `GlobalProvider`');
  },
]);

interface State {
  avatarUrl: string;
}

interface Action {
  type: 'UPDATE_AVATAR';
  payload?: any;
}

export const GlobalProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = React.useReducer((state: State, action: Action) => {
    switch (action.type) {
      case 'UPDATE_AVATAR':
        return {
          ...state,
          avatarUrl: action.payload,
        };
      default:
        return state;
    }
  }, initialState);
  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalContext.Provider>
  );
};
