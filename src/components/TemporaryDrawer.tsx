import React from 'react';
import Bolt from '@mui/icons-material/Bolt';
import Box from '@mui/material/Box';
import Business from '@mui/icons-material/Business';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import School from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';
import { ModeSelector, LanguageSelector } from './SettingsToggleButtonGroup';

export default function TemporaryDrawer(props): React.JSX.Element {

  const DrawerList = (
    <Box
      role="presentation"
      m={1.5}
    >
      <Typography sx={{ p: 1, pb: 1, color: 'text.primary' }} variant='h6'>General</Typography>
      <Divider />
      <List sx={{ pb: 8 }} onClick={props.onClose}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Business/>
            </ListItemIcon>
            <ListItemText primary='Experience' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <School/>
            </ListItemIcon>
            <ListItemText primary='Education' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Bolt/>
            </ListItemIcon>
            <ListItemText primary='Projects & Interests' />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <Typography sx={{ p: 1, color: 'text.primary' }} variant='h6'>Settings</Typography>
      <Divider />
      <ModeSelector sx={{ pb: 3, width: '100%' }} />
      <LanguageSelector sx={{ width: '100%' }} />
    </Box>
  );

  return (
    <div>
      <Drawer open={props.isOpen} onClose={props.onClose}>
        {DrawerList}
      </Drawer>
    </div>
  );
}