import React, { Fragment } from 'react';
import SectionPalette from './SectionPalette';
import { SectionMode } from './SectionMode';
import { SectionUploadImage } from './SectionUploadImage';
import { SectionUserInfo } from './SectionUserInfo';
import { SettingsPageText } from '../../text';
import { SectionHeader } from '../../modules/components/SectionHeader';
import { Box } from '@material-ui/system';

export const Settings = () => {
  return (
    <Fragment>
      <SectionHeader
        title={SettingsPageText.PageHeader}
        subtitle={SettingsPageText.PageSubHeader}
        isBreadCrumb={false}
      />
      <Box sx={{ mt: 2 }} />
      <SectionUploadImage />
      <Box sx={{ mt: 2 }} />
      <SectionUserInfo />
      <Box sx={{ mt: 2 }} />
      <SectionMode />
      <Box sx={{ mt: 2 }} />
      <SectionPalette />
    </Fragment>
  );
};
