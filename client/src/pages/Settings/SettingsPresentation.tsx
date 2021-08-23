import React, { Fragment } from 'react';
import ColorTool from '../../modules/components/ColorTool';
import { ToggleDarkMode } from '../../modules/components/ToggleDarkMode';
import { UploadImagePaper } from '../../modules/components/UploadImagePaper';
import { UserInfoPaper } from '../../modules/components/UserInfoPaper';
import { SettingsPageText } from '../../text';
import { SectionHeader } from '../../modules/components/SectionHeader';
import { Box } from '@material-ui/system';

export const SettingsPresentation = () => (
  <Fragment>
    <SectionHeader
      title={SettingsPageText.PageHeader}
      subtitle={SettingsPageText.PageSubHeader}
      isBreadCrumb={false}
    />
    <Box sx={{ mt: 2 }} />
    <UploadImagePaper />
    <UserInfoPaper />
    <ToggleDarkMode />
    <ColorTool />
  </Fragment>
);
