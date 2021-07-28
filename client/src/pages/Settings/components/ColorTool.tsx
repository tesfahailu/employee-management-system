import * as React from 'react';
import PropTypes from 'prop-types';
import { rgbToHex, useTheme } from '@material-ui/core/styles';
import * as colors from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';
import Slider from '@material-ui/core/Slider';
import { capitalize } from '@material-ui/core/utils';
import { PaletteAugmentColorOptions } from '@material-ui/core/styles/createPalette';

const defaults = {
  primary: '#2196f3',
  secondary: '#f50057',
};

const hues = (Object.keys(colors) as Array<keyof typeof colors>).slice(1, 17);
const shade = Object.keys(
  (Object.keys(colors) as Array<keyof typeof colors>)
    .map((key) => colors[key])
    .slice(1, 17),
);

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
];

interface TooltipRadioType {
  'aria-label': string | undefined;
  'aria-labelledby': string | undefined;
  inputProps: object;
  sx: object;
}

const TooltipRadio = React.forwardRef(function TooltipRadio(
  props: RadioProps,
  ref: any,
) {
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
});

interface StateProp {
  [index: string]: string | number;
  primary: string;
  secondary: string;
  primaryInput: string;
  secondaryInput: string;
  primaryHue: 'blue';
  secondaryHue: 'pink';
  primaryShade: number;
  secondaryShade: number;
}

function ColorTool() {
  const theme = useTheme();
  const [state, setState] = React.useState<StateProp>({
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
    (name: 'primary' | 'secondary') => (event: { target: { value: any } }) => {
      const isRgb = (string: string) =>
        /rgb\([0-9]{1,3}\s*,\s*[0-9]{1,3}\s*,\s*[0-9]{1,3}\)/i.test(string);

      const isHex = (string: string) =>
        /^#?([0-9a-f]{3})$|^#?([0-9a-f]){6}$/i.test(string);

      let {
        target: { value: color },
      } = event;

      setState((prevState) => ({
        ...prevState,
        [`${name}Input`]: color,
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
    (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {};
  // const handleChangeHue =
  //   (name: string) => (event: { target: { value: string } }) => {
  //     const hue = event.target.value;
  //     const color = colors[hue][shades[state[`${name}Shade`]]];

  //     setState({
  //       ...state,
  //       [`${name}Hue`]: hue,
  //       [name]: color,
  //       [`${name}Input`]: color,
  //     });
  //   };

  const handleChangeShade =
    (name: 'primary' | 'secondary') =>
    (event: Event, value: number | number[], activeThumb: number) => {
      // const color =
      //   colors[state[`${name}Hue` as string] as string][shades[shade]];
      // setState({
      //   ...state,
      //   [`${name}Shade`]: shade,
      //   [name]: color,
      //   [`${name}Input`]: color,
      // });
    };

  const colorBar = (color: string) => {
    const background = theme.palette.augmentColor({
      color: {
        main: color,
      },
    } as PaletteAugmentColorOptions);

    return (
      <Grid container sx={{ mt: 2 }}>
        {(['dark', 'main', 'light'] as ('light' | 'main' | 'dark')[]).map(
          (key) => (
            <Box
              sx={{
                width: 64,
                height: 64,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              style={{ backgroundColor: background[key] }}
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
          ),
        )}
      </Grid>
    );
  };

  const colorPicker = (intent: 'primary' | 'secondary') => {
    const intentInput = state[`${intent}Input`];
    const intentShade = state[`${intent}Shade`];
    const color = state[`${intent}`];

    return (
      <Grid item xs={12} sm={6} md={4}>
        <Typography
          component="label"
          gutterBottom
          htmlFor={intent}
          variant="h6"
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
      </Grid>
    );
  };

  return (
    <Grid container spacing={5} sx={{ p: 0 }}>
      {colorPicker('primary')}
      {colorPicker('secondary')}
    </Grid>
  );
}

export default ColorTool;
