import React, {
  ChangeEvent,
  useState,
  useRef,
  useCallback,
  Fragment,
} from 'react';
import { Avatar, Button, Grid, Paper, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import UploadButton from './UploadButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: 20,
      marginBottom: 20,
    },
    textSpacing: {
      marginBottom: 10,
    },
    size: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    buttonContainer: {
      marginTop: 10,
    },
    buttonSpacing: {
      marginRight: 10,
    },
  }),
);

const UploadImage = ({
  url,
  onSelectFile,
}: {
  url: string;
  onSelectFile: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const classes = useStyles();
  return (
    <Grid item>
      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        alignItems="center"
        spacing={1}
      >
        <Grid item>
          <Avatar src={url} className={classes.size} />
        </Grid>
        <Grid item xs>
          <UploadButton onSelectFile={onSelectFile} />
        </Grid>
      </Grid>
    </Grid>
  );
};

const FileAttributes = ({
  isSelected,
  selectedFile,
}: {
  isSelected: boolean;
  selectedFile: File;
}) => {
  return (
    <Grid item xs={12} sm>
      {isSelected ? (
        <div>
          <p>Image Name: {selectedFile!.name}</p>
          <p>Image Type: {selectedFile!.type}</p>
          <p>Size in bytes: {selectedFile!.size}</p>
          <p>Last Modified Date: {selectedFile!.lastModified}</p>
        </div>
      ) : (
        <p>Select an image to show details</p>
      )}
    </Grid>
  );
};

const SaveImageButton = ({
  setIsSelected,
}: {
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => setIsSelected(false)}
      className={classes.buttonSpacing}
    >
      Save Cropped Image
    </Button>
  );
};

const CancelButton = ({
  setIsSelected,
}: {
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={() => setIsSelected(false)}
    >
      Cancel
    </Button>
  );
};

export const UploadImagePaper = () => {
  const classes = useStyles();
  const [upImg, setUpImg] = useState<string>();
  const imgRef = useRef(null);
  const [crop, setCrop] = useState<ReactCrop.Crop>({
    unit: '%',
    width: 30,
    aspect: 1,
  });
  const [completedCrop, setCompletedCrop] = useState<ReactCrop.Crop>();
  const [selectedFile, setSelectedFile] = useState<File>();
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [url, setUrl] = useState('');

  const onSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => setUpImg(reader.result as string));
      reader.readAsDataURL(e.target.files[0]);
      setIsSelected(true);
      setSelectedFile(e.target.files[0]);
    }
  };

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);

  return (
    <Paper className={classes.paper}>
      <Typography variant="subtitle1" className={classes.textSpacing}>
        Upload Image:
      </Typography>
      <Grid
        container
        spacing={1}
        alignItems={!isSelected ? 'flex-start' : 'center'}
      >
        <UploadImage url={url} onSelectFile={onSelectFile} />
        <FileAttributes isSelected={isSelected} selectedFile={selectedFile!} />
      </Grid>
      {isSelected && (
        <Fragment>
          <Typography variant="subtitle1">
            Crop the image below and press the save button to save your new
            avatar.
          </Typography>
          <ReactCrop
            src={upImg!}
            onImageLoaded={onLoad}
            crop={crop}
            onChange={(c) => setCrop(c)}
            onComplete={(c) => setCompletedCrop(c)}
            maxWidth={250}
            maxHeight={250}
            style={{ width: 500, height: 'auto', display: 'block' }}
          />
          <div className={classes.buttonContainer}>
            <SaveImageButton setIsSelected={setIsSelected} />
            <CancelButton setIsSelected={setIsSelected} />
          </div>
        </Fragment>
      )}
    </Paper>
  );
};
