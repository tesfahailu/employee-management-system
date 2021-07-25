import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { ChangeEvent } from 'react';

const log = console.log;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      display: 'inline-block',
    },
    input: {
      display: 'none',
    },
  }),
);

export default function UploadButtons({
  onSelectFile,
}: {
  onSelectFile: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        type="file"
        onChange={onSelectFile}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
    </div>
  );
}
