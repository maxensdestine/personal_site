import React from 'react';
import AutoAwesome from '@mui/icons-material/AutoAwesome';
import Box from '@mui/material/Box';
import Business from '@mui/icons-material/Business';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import LightBulb from '@mui/icons-material/Lightbulb';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import School from '@mui/icons-material/School';
import Typography from '@mui/material/Typography/Typography';
import { useTranslation } from 'react-i18next';

import { AppearanceSelector, LanguageSelector } from './SettingsToggleButtonGroup';
import '../../translations/Translations';

interface NavButtonInfo {
  icon: JSX.Element;
  title: string;
}

export default function TemporaryDrawer(props): React.JSX.Element {
  const { t, i18n } = useTranslation();
  const { isOpen, onClose, ...rest } = props;
  const strGeneral: string = t('general');
  const strAbout: string = t('about');
  const strExperience: string = 'experience';
  const strEducation: string = 'education';
  const strProjects: string = 'projects';
  const strSettings: string = t('settings');
  const strDownloads: string = t('downloads');
  const resumes: string[] = ['Maxens Destine CV (eng).pdf', 'Maxens Destine CV (fr).pdf'];
  const navInfos: Array<NavButtonInfo> =
    [
      {
        icon: <LightBulb color='primary' />, title: strAbout
      },
      {
        icon: <Business color='primary' />, title: strExperience
      },
      {
        icon: <School color='primary' />, title: strEducation
      },
      {
        icon: <AutoAwesome color='primary' />, title: strProjects
      }
    ]

  function GeneralNavigation(props): React.JSX.Element {
    return (
      <Box {...props}>
        <Typography sx={{ m: 1, mb: 1 }} variant='h6' color='primary'>{strGeneral}</Typography>
        <Divider />
        <List sx={{ mb: 5 }} onClick={onClose}>
          {navInfos.map((info, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                href={'#' + (index == 0 ? 'top' : info.title)}>
                <ListItemIcon>
                  {info.icon}
                </ListItemIcon>
                <ListItemText primary={
                  <Typography variant='body1' color='primary'>
                    {t(info.title)}
                  </Typography>}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    )
  }

  function getShortNameForFile(fileName: string) {
    fileName = fileName.replace('Maxens Destine ', ' ');
    return fileName;
  }

  function ResumeFileName(props): React.JSX.Element {
    const { fileName, ...rest } = props;
    return (
      <Box {...rest}>
        <Box display={{ xs: 'none', sm: 'inline' }}>
          <ListItemText primary={
            <Typography variant='body1' color='primary'>
              {fileName}
            </Typography>}
          />
        </Box>
        <Box display={{ xs: 'inline', sm: 'none' }}>
          <ListItemText primary={
            <Typography variant='body1' color='primary'>
              {getShortNameForFile(fileName)}
            </Typography>}
          />
        </Box>
      </Box>);
  }

  function ResumeDownload(props): React.JSX.Element {
    return (
      <Box {...props}>
        <Typography sx={{ m: 1, mb: 1 }} variant='h6' color='primary'>{strDownloads}</Typography>
        <Divider />
        <List sx={{ mb: 5 }} onClick={onClose}>
          {resumes.map((fileName, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                href={'resumes/' + fileName}
                download={fileName}>
                <ResumeFileName fileName={fileName} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    )
  }

  const DrawerList = (
    <Box
      role='presentation'
      m={1.5}>
      <GeneralNavigation display={{ sm: 'block', lg: 'none' }} />
      <ResumeDownload />
      <Typography sx={{ m: 1 }} variant='h6' color='primary'>{strSettings}</Typography>
      <Divider sx={{ mb: { xs: 4, sm: 4, md: 0, lg: 0 } }} />
      <AppearanceSelector sx={{ mb: { xs: 4.5, sm: 4.5, md: 1, lg: 1 }, width: '100%' }} />
      <LanguageSelector sx={{ width: '100%' }} />
    </Box>
  );

  return (
    <Box {...rest}>
      <Drawer open={isOpen} onClose={onClose}>
        {DrawerList}
      </Drawer>
    </Box>
  );
}