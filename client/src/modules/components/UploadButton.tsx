import React from 'react';
import Button from '@material-ui/core/Button';
import { ChangeEvent } from 'react';
import { Box } from '@material-ui/system';

export default function UploadButtons({
  onSelectFile,
}: {
  onSelectFile: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <Box
      sx={{
        '& > *': {
          m: 1,
        },
        display: 'inline-block',
      }}
    >
      <Box
        component="input"
        type="file"
        accept="image/*"
        sx={{ display: 'none' }}
        id="contained-button-file"
        onChange={onSelectFile}
      />
      <label htmlFor="contained-button-file">
        <Button component="span">Upload</Button>
      </label>
    </Box>
  );
}
