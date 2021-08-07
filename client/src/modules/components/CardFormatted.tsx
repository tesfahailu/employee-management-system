import React, { Fragment } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';
import { CardFormattedProp } from '../../types/types';
import { addSpaceAndUpperCaseText } from '../utils/textRegex';

const CardRow = ({ index: key, value }: { index: string; value: string }) => (
  <Fragment>
    <Typography variant="subtitle2" sx={{ mt: 2 }}>
      {key}
    </Typography>
    <Typography variant="body2" sx={{ mb: 2 }}>
      {value}
    </Typography>
    <Divider />
  </Fragment>
);

export const CardFormatted = ({
  headerText,
  buttonText,
  onEditButtonClick,
  data,
}: CardFormattedProp) => (
  <Card sx={{ mb: 3, p: 1 }}>
    <CardContent>
      <Grid container justifyContent="space-between">
        <Typography variant="h6">{headerText}</Typography>
        {buttonText && (
          <Button onClick={onEditButtonClick} variant="outlined">
            {buttonText}
          </Button>
        )}
      </Grid>
      <Box sx={{ mt: 3 }}>
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
