import React, { Fragment } from 'react';
import { Box, Toolbar } from '@material-ui/core';
import { Drawer } from '../modules/components/Drawer';

export function AppLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerWidth = 220;
  return (
    <Fragment>
      <Drawer
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
      />
      <Box
        sx={{
          ml: { xs: 0, md: `${drawerWidth}px` },
          width: { xs: '100%', md: `calc(100vw - ${drawerWidth}px )` },
          maxWidth: '100%',
        }}
      >
        <Toolbar />
        <Box component="main" sx={{ p: 3 }}>
          {children}
        </Box>
      </Box>
    </Fragment>
  );
}
