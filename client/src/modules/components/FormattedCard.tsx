import React from 'react';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import { FormattedCardProp } from '../../types/types';
import { addSpaceAndUpperCaseText } from '../utils/textRegex';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textSpacingBelow: {
      marginBottom: theme.spacing(0.5),
    },
    cardSpacing: {
      marginBottom: theme.spacing(1),
    },
    removeContentTopPaddding: { paddingTop: 0 },
  }),
);

export const FormattedCard = ({
  cardHeaderText,
  cardHeaderActionButtonText,
  onEditButtonClick,
  cardContentData,
}: FormattedCardProp) => {
  const classes = useStyles();
  return (
    <Card className={classes.cardSpacing}>
      <CardHeader
        title={<Typography variant="h6">{cardHeaderText}</Typography>}
        action={
          cardHeaderActionButtonText && (
            <Button onClick={onEditButtonClick}>
              {cardHeaderActionButtonText}
            </Button>
          )
        }
      />
      <CardContent className={classes.removeContentTopPaddding}>
        {!Array.isArray(cardContentData)
          ? Object.keys(cardContentData).map((key) => (
              <CardRow
                index={addSpaceAndUpperCaseText(key)}
                value={cardContentData[key]}
              />
            ))
          : cardContentData.map((object) =>
              Object.keys(object).map((key) => (
                <CardRow
                  index={addSpaceAndUpperCaseText(key)}
                  value={object[key]}
                />
              )),
            )}
      </CardContent>
    </Card>
  );
};

const CardRow = ({ index: key, value }: { index: string; value: string }) => {
  const classes = useStyles();
  return (
    <div className={classes.textSpacingBelow}>
      <Typography variant="subtitle2" gutterBottom>
        {key}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {value}
      </Typography>
    </div>
  );
};
