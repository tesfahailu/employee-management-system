import React, { Fragment } from 'react';
import { rgbToHex, useTheme } from '@material-ui/core/styles';
import * as colors from '@material-ui/core/colors';
import CheckIcon from '@material-ui/icons/Check';
import { capitalize } from '@material-ui/core/utils';
import {
  Button,
  Card,
  CardContent,
  Box,
  Grid,
  Input,
  Radio,
  RadioProps,
  Tooltip,
  Typography,
  Slider,
} from '@material-ui/core';
import { DispatchContext } from '../../modules/components/Theme';

const defaults = {
  primary: '#2196f3',
  secondary: '#f50057',
};

type hue = keyof typeof colors;
const hues = (Object.keys(colors) as Array<hue>).slice(1, 17);
const shades = [
  900,
  800,
  700,
  600,
  500,
  400,
  300,
  200,
  100,
  50,
  'A700',
  'A400',
  'A200',
  'A100',
] as const;

const TooltipRadio = React.forwardRef<HTMLButtonElement, RadioProps>(
  function TooltipRadio(props, ref) {
    const {
      'aria-labelledby': ariaLabelledBy,
      'aria-label': ariaLabel,
      inputProps,
      ...other
    } = props;

    return (
      <Radio
        ref={ref}
        {...other}
        inputProps={{
          ...inputProps,
          'aria-labelledby': ariaLabelledBy,
          'aria-label': ariaLabel,
        }}
      />
    );
  },
);

interface IShades {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  A100: string;
  A200: string;
  A400: string;
  A700: string;
}

export default function SectionPalette() {
  const dispatch = React.useContext(DispatchContext);
  const theme = useTheme();
  const [state, setState] = React.useState({
    primary: defaults.primary,
    secondary: defaults.secondary,
    primaryInput: defaults.primary,
    secondaryInput: defaults.secondary,
    primaryHue: 'blue',
    secondaryHue: 'pink',
    primaryShade: 4,
    secondaryShade: 11,
  });

  const handleChangeColor =
    (name: 'primary' | 'secondary') =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const isRgb = (string: string) =>
        /rgb\([0-9]{1,3}\s*,\s*[0-9]{1,3}\s*,\s*[0-9]{1,3}\)/i.test(string);

      const isHex = (string: string) =>
        /^#?([0-9a-f]{3})$|^#?([0-9a-f]){6}$/i.test(string);

      let {
        target: { value: color },
      } = event;

      setState((prevState) => ({
        ...prevState,
        [`${name}Input` as const]: color,
      }));

      let isValidColor = false;

      if (isRgb(color)) {
        isValidColor = true;
      } else if (isHex(color)) {
        isValidColor = true;
        if (color.indexOf('#') === -1) {
          color = `#${color}`;
        }
      }

      if (isValidColor) {
        setState((prevState) => ({
          ...prevState,
          [name]: color,
        }));
      }
    };

  const handleChangeHue =
    (name: 'primary' | 'secondary') =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const hue = event.target.value as hue;
      const color = (colors[hue] as IShades)[
        shades[state[`${name}Shade` as const]]
      ];

      setState({
        ...state,
        [`${name}Hue`]: hue,
        [name]: color,
        [`${name}Input`]: color,
      });
    };

  const handleChangeShade =
    (name: 'primary' | 'secondary') =>
    (event: Event, shade: number | number[]) => {
      const color = (colors[state[`${name}Hue` as const] as hue] as IShades)[
        shades[shade as number]
      ];
      setState({
        ...state,
        [`${name}Shade`]: shade,
        [name]: color,
        [`${name}Input`]: color,
      });
    };

  const handleChangeDocsColors = () => {
    const paletteColors = {
      primary: { main: state.primary },
      secondary: { main: state.secondary },
    };

    dispatch({
      type: 'CHANGE',
      payload: { paletteColors },
    });

    document.cookie = `paletteColors=${JSON.stringify(
      paletteColors,
    )};path=/;max-age=31536000`;
  };

  const handleResetDocsColors = () => {
    dispatch({ type: 'RESET_COLORS' });

    document.cookie = 'paletteColors=;path=/;max-age=0';
  };

  const colorBar = (color: string) => {
    const background = theme.palette.augmentColor({
      color: {
        main: color,
      },
    });

    return (
      <Grid container sx={{ mt: 2 }}>
        {(['dark', 'main', 'light'] as const).map((key) => (
          <Box
            sx={{
              width: 64,
              height: 64,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: background[key],
            }}
            key={key}
          >
            <Typography
              variant="caption"
              style={{
                color: theme.palette.getContrastText(background[key]),
              }}
            >
              {rgbToHex(background[key])}
            </Typography>
          </Box>
        ))}
      </Grid>
    );
  };

  const colorPicker = (intent: 'primary' | 'secondary') => {
    const intentInput = state[`${intent}Input` as const];
    const intentShade = state[`${intent}Shade` as const];
    const color = state[`${intent}` as const];

    return (
      <Fragment>
        <Typography
          component="label"
          gutterBottom
          htmlFor={intent}
          variant="subtitle1"
        >
          {capitalize(intent)}
        </Typography>
        <Input
          id={intent}
          value={intentInput}
          onChange={handleChangeColor(intent)}
          fullWidth
        />
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, mb: 2 }}>
          <Typography id={`${intent}ShadeSliderLabel`}>Shade:</Typography>
          <Slider
            sx={{ width: 'calc(100% - 80px)', ml: 3, mr: 3 }}
            value={intentShade as number}
            min={0}
            max={13}
            step={1}
            onChange={handleChangeShade(intent)}
            aria-labelledby={`${intent}ShadeSliderLabel`}
          />
          <Typography>{shades[intentShade as number]}</Typography>
        </Box>
        <Box sx={{ width: 192 }}>
          {hues.map((hue) => {
            const shade =
              intent === 'primary'
                ? shades[state.primaryShade]
                : shades[state.secondaryShade];
            const backgroundColor = (colors as any)[hue][shade];

            return (
              <Tooltip placement="right" title={hue} key={hue}>
                <TooltipRadio
                  sx={{ p: 0 }}
                  color="default"
                  checked={state[intent] === backgroundColor}
                  onChange={handleChangeHue(intent)}
                  value={hue}
                  name={intent}
                  icon={
                    <Box
                      sx={{ width: 48, height: 48 }}
                      style={{ backgroundColor }}
                    />
                  }
                  checkedIcon={
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        border: 1,
                        borderColor: 'white',
                        color: 'common.white',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      style={{ backgroundColor }}
                    >
                      <CheckIcon style={{ fontSize: 30 }} />
                    </Box>
                  }
                />
              </Tooltip>
            );
          })}
        </Box>
        {colorBar(color as string)}
      </Fragment>
    );
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Palette:
        </Typography>
        <Grid container spacing={4}>
          <Grid item>{colorPicker('primary')}</Grid>
          <Grid item>{colorPicker('secondary')}</Grid>
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Button onClick={handleChangeDocsColors}>Set App Colors</Button>
          <Button onClick={handleResetDocsColors} sx={{ ml: 1 }}>
            Reset App Colors
          </Button>
        </Grid>
      </CardContent>
    </Card>
  );
}
