import React, { ChangeEvent, useState, Fragment } from 'react';
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
import { GlobalContext } from './Global';

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
  handleSaveChange,
}: {
  handleSaveChange: () => void;
}) => {
  const [state, dispatch] = React.useContext(GlobalContext);
  return (
    <Button onClick={handleSaveChange} sx={{ mr: 1 }}>
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
    <Button color="secondary" onClick={() => setIsSelected(false)}>
      Cancel
    </Button>
  );
};

export const UploadImagePaper = () => {
  const [src, setSrc] = useState<string | null>(null);
  const [crop, setCrop] = useState<ReactCrop.Crop>({
    unit: '%',
    width: 30,
    aspect: 1,
  });
  const [croppedImageUrl, setCroppedImageUrl] = useState<string>();

  const [isSelected, setIsSelected] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File>();
  const [imgRef, setImgRef] = useState<HTMLImageElement | null>(null);

  const [_, dispatch] = React.useContext(GlobalContext);

  const onSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        setSrc(reader.result as string | null),
      );
      reader.readAsDataURL(e.target.files[0]);
      setIsSelected(true);
      setSelectedFile(e.target.files[0]);
    }
  };

  const makeClientCrop = async (crop: ReactCrop.Crop) => {
    if (imgRef && crop.width && crop.height) {
      const croppedImageUrl: string = await getCroppedImg(
        imgRef,
        crop,
        'newFile.jpeg',
      );
      setCroppedImageUrl(croppedImageUrl);
    }
  };

  const getCroppedImg = (
    image: HTMLImageElement,
    crop: ReactCrop.Crop,
    fileName: string,
  ): Promise<string> => {
    const canvas = document.createElement('canvas');
    const pixelRatio = window.devicePixelRatio;
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext('2d');

    canvas.width = crop.width! * pixelRatio * scaleX;
    canvas.height = crop.height! * pixelRatio * scaleY;

    ctx!.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx!.imageSmoothingQuality = 'high';

    ctx!.drawImage(
      image,
      crop.x! * scaleX,
      crop.y! * scaleY,
      crop.width! * scaleX,
      crop.height! * scaleY,
      0,
      0,
      crop.width! * scaleX,
      crop.height! * scaleY,
    );

    return new Promise((resolve, _reject) => {
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            console.error('Canvas is empty');
            return;
          }
          const url = window.URL.createObjectURL(blob);
          resolve(url);
        },
        'image/jpeg',
        1,
      );
    });
  };

  const handleSaveChange = () => {
    dispatch({ type: 'UPDATE_AVATAR', payload: croppedImageUrl });
    setIsSelected(false);
  };

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
        <UploadImage
          url={croppedImageUrl ? croppedImageUrl : ''}
          onSelectFile={onSelectFile}
        />
        <FileAttributes isSelected={isSelected} selectedFile={selectedFile!} />
      </Grid>
      {isSelected && (
        <Fragment>
          <Typography variant="subtitle1">
            Crop the image below and press the save button to save your new
            avatar.
          </Typography>
          <ReactCrop
            src={src!}
            crop={crop}
            ruleOfThirds
            onImageLoaded={(img) => setImgRef(img)}
            onComplete={(crop) => makeClientCrop(crop)}
            onChange={(crop) => setCrop(crop)}
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
            <SaveImageButton handleSaveChange={handleSaveChange} />
            <CancelButton setIsSelected={setIsSelected} />
          </div>
        </Fragment>
      )}
    </Paper>
  );
};
