import React, { Fragment } from 'react';
import ColorTool from '../../modules/components/ColorTool';
import { ToggleDarkMode } from '../../modules/components/ToggleDarkMode';
import { UploadImagePaper } from '../../modules/components/UploadImagePaper';
import { UserInfoPaper } from '../../modules/components/UserInfoPaper';
import { SettingsPageText } from '../../text';
import { PageHeader } from '../../modules/components/PageHeader';
import { Box } from '@material-ui/system';

export const SettingsPresentation = () => (
  <Fragment>
    <PageHeader
      title={SettingsPageText.PageHeaderText}
      subtitle={SettingsPageText.PageSubHeaderText}
      isBreadCrumb={false}
    />
    <Box sx={{ mt: 2 }} />
    <UploadImagePaper />
    <UserInfoPaper />
    <ToggleDarkMode />
    <ColorTool />
  </Fragment>
);
