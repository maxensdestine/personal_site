import React from 'react';
import AutoAwesome from '@mui/icons-material/AutoAwesome';
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
import { AppearanceSelector, LanguageSelector } from './SettingsToggleButtonGroup';
import { useTranslation } from 'react-i18next';
import "../translations/Translations";

export default function TemporaryDrawer(props): React.JSX.Element {
  const { t, i18n } = useTranslation();
  const generalStr: String = t("general");
  const experienceStr: String = t("experience");
  const educationStr: String = t("education");
  const projectsStr: String = t("projects-interest");
  const settingsStr: String = t("settings");
  const DrawerList = (
    <Box
      role="presentation"
      m={1.5}
    >
      <Typography sx={{ m: 1, mb: 1, color: 'text.primary' }} variant='h6'>{generalStr}</Typography>
      <Divider />
      <List sx={{ mb: 5 }} onClick={props.onClose}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Business />
            </ListItemIcon>
            <ListItemText primary={experienceStr} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <School />
            </ListItemIcon>
            <ListItemText primary={educationStr} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AutoAwesome />
            </ListItemIcon>
            <ListItemText primary={projectsStr} />
          </ListItemButton>
        </ListItem>
      </List>

      <Typography sx={{ m: 1, color: 'text.primary' }} variant='h6'>{settingsStr}</Typography>
      <Divider sx={{ mb: { xs: 4, sm: 4, md: 0, lg: 0 } }} />
      <AppearanceSelector sx={{ mb: { xs: 4.5, sm: 4.5, md: 1, lg: 1 }, width: '100%' }}/>
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