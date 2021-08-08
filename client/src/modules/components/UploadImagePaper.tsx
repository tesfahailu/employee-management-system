import React, {
  ChangeEvent,
  useState,
  useRef,
  useCallback,
  Fragment,
} from 'react';
import {
  Avatar,
  Button,
  Grid,
  Paper,
  Typography,
  Box,
} from '@material-ui/core';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import UploadButton from './UploadButton';

const UploadImage = ({
  url,
  onSelectFile,
}: {
  url: string;
  onSelectFile: (e: ChangeEvent<HTMLInputElement>) => void;
}) => (
  <Grid item>
    <Grid
      container
      direction="column"
      justifyContent="flex-end"
      alignItems="center"
      spacing={1}
    >
      <Grid item>
        <Avatar src={url} sx={{ width: 70, height: 70 }} />
      </Grid>
      <Grid item xs>
        <UploadButton onSelectFile={onSelectFile} />
      </Grid>
    </Grid>
  </Grid>
);

const FileAttributes = ({
  isSelected,
  selectedFile,
}: {
  isSelected: boolean;
  selectedFile: File;
}) => (
  <Box sx={{ display: 'flex' }}>
    {isSelected ? (
      <Box sx={{ pt: 2 }}>
        <Typography variant="body2">
          Image Name: {selectedFile!.name}
        </Typography>
        <Typography variant="body2">
          Image Type: {selectedFile!.type}
        </Typography>
        <Typography variant="body2">
          Size in bytes: {selectedFile!.size}
        </Typography>
        <Typography variant="body2">
          Last Modified Date: {selectedFile!.lastModified}
        </Typography>
      </Box>
    ) : (
      <Typography variant="body2" sx={{ pt: 2 }}>
        Select an image to show details
      </Typography>
    )}
  </Box>
);

const SaveImageButton = ({
  setIsSelected,
}: {
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <Button onClick={() => setIsSelected(false)} sx={{ mr: 1 }}>
    Save Cropped Image
  </Button>
);

const CancelButton = ({
  setIsSelected,
}: {
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Button color="secondary" onClick={() => setIsSelected(false)}>
      Cancel
    </Button>
  );
};

export const UploadImagePaper = () => {
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
    <Paper sx={{ padding: 2, mb: 2 }}>
      <Typography variant="h6" sx={{ mb: 1 }}>
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
            style={{
              width: 500,
              height: 'auto',
              display: 'block',
              marginBottom: 10,
            }}
          />
          <div>
            <SaveImageButton setIsSelected={setIsSelected} />
            <CancelButton setIsSelected={setIsSelected} />
          </div>
        </Fragment>
      )}
    </Paper>
  );
};
