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
import { GlobalContext } from '../../modules/components/Global';

export const SectionUploadImage = () => {
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
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6" mb={1}>
        Upload Image:
      </Typography>
      {isSelected ? (
        <Fragment>
          <Typography variant="subtitle1" mb={2}>
            Crop the image below.
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
              width: '100%',
              maxWidth: '1000px',
              height: 'auto',
              display: 'block',
              marginBottom: 10,
            }}
          />
          <Button onClick={handleSaveChange} sx={{ mr: 1 }}>
            Save
          </Button>
          <Button color="secondary" onClick={() => setIsSelected(false)}>
            Cancel
          </Button>
        </Fragment>
      ) : (
        <Fragment>
          <Box
            sx={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar
              src={croppedImageUrl ? croppedImageUrl : ''}
              sx={{ width: 70, height: 70, m: 1 }}
            />
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
          <Typography
            variant="body2"
            display="inline-block"
            position="absolute"
            m={1}
          >
            Select an image to change profile picture
          </Typography>
        </Fragment>
      )}
    </Paper>
  );
};
