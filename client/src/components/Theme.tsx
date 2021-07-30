import { useMediaQuery } from '@material-ui/core';
import darkScrollbar from '@material-ui/core/darkScrollbar';
import React from 'react';
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from '@material-ui/core/styles';
import { getCookie } from '../helper_functions/helperFunctions';

export const DispatchContext = React.createContext<React.Dispatch<Action>>(
  () => {
    throw new Error('Forgot to wrap component in `ThemeProvider`');
  },
);

interface ThemeInitialOptions {
  paletteMode: 'light' | 'dark';
  paletteColors: any;
  spacing: number;
}

const themeInitialOptions = {
  paletteMode: 'light',
  paletteColors: {},
  spacing: 8,
};
interface Action {
  type: 'RESET_COLORS' | 'CHANGE';
  payload?: any;
}

export function ThemeProvider(props: { children: any }) {
  const { children } = props;
  const [themeOptions, dispatch] = React.useReducer(
    (state: ThemeInitialOptions, action: Action) => {
      switch (action.type) {
        case 'RESET_COLORS':
          return {
            ...state,
            paletteColors: themeInitialOptions.paletteColors,
          };
        case 'CHANGE':
          return {
            ...state,
            paletteMode: action.payload.paletteMode || state.paletteMode,
            paletteColors: action.payload.paletteColors || state.paletteColors,
          };
        default:
          throw new Error(`Unrecognized type ${action.type}`);
      }
    },
    themeInitialOptions,
  );

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const preferredMode = prefersDarkMode ? 'dark' : 'light';
  const { paletteColors, paletteMode = preferredMode, spacing } = themeOptions;

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const nextPaletteColors = JSON.parse(
        getCookie('paletteColors') || 'null',
      );
      const nextPaletteMode = getCookie('paletteMode') || preferredMode;

      dispatch({
        type: 'CHANGE',
        payload: {
          paletteColors: nextPaletteColors,
          paletteMode: nextPaletteMode,
        },
      });
    }
  }, [preferredMode]);

  const theme = React.useMemo(() => {
    const nextTheme = createTheme(
      {
        palette: {
          mode: paletteMode,
          ...paletteColors,
        },
        spacing,
      },
      {
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: paletteMode === 'dark' ? darkScrollbar() : null,
            },
          },
        },
      },
    );

    return nextTheme;
  }, [paletteColors, paletteMode, spacing]);

  return (
    <MuiThemeProvider theme={theme}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </MuiThemeProvider>
  );
}

export function useChangeTheme() {
  const dispatch = React.useContext(DispatchContext);
  return React.useCallback(
    (options) => dispatch({ type: 'CHANGE', payload: options }),
    [dispatch],
  );
}
