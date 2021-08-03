import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';
import { CardFormattedProp } from '../../types/types';
import { addSpaceAndUpperCaseText } from '../utils/textRegex';

const CardRow = ({ index: key, value }: { index: string; value: string }) => {
  return (
    <div>
      <Typography variant="subtitle2">{key}</Typography>
      <Typography variant="body2" sx={{ ml: 0.5, mb: 2 }}>
        {value}
      </Typography>
    </div>
  );
};

export const CardFormatted = ({
  headerText,
  buttonText,
  onEditButtonClick,
  data,
}: CardFormattedProp) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Grid container justifyContent="space-between">
          <Typography variant="subtitle1">{headerText}</Typography>
          {buttonText && (
            <Button onClick={onEditButtonClick} variant="outlined">
              {buttonText}
            </Button>
          )}
        </Grid>
        <Box sx={{ mt: 2 }}>
          {!Array.isArray(data)
            ? Object.keys(data).map((key) => (
                <CardRow
                  index={addSpaceAndUpperCaseText(key)}
                  value={data[key]}
                />
              ))
            : data.map((object) =>
                Object.keys(object).map((key) => (
                  <CardRow
                    index={addSpaceAndUpperCaseText(key)}
                    value={object[key]}
                  />
                )),
              )}
        </Box>
      </CardContent>
    </Card>
  );
};
