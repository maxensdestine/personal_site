import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography/Typography';
import useTheme from '@mui/material/styles/useTheme';
import { useTranslation } from 'react-i18next';

import ContactMediaBar from './ContactMediaBar';
import MyStepper from './MyStepper';
import ImgCoffee from '../../resources/images/me_anywhere/coffee.jpg';
import ImgCoffeeBW from '../../resources/images/me_anywhere/coffee_bw.jpg';
import '../../translations/Translations';

const Styles = (theme) => ({
  icon: {
    fontSize: 42,
  },
  root: {
    height: '100%',
    display: 'flex',
    flexGrow: '1',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  imageBoxLandscape: {
    marginBottom: '4.9vh',
    [theme.breakpoints.up('lg')]: {
      maxWidth: '100%'
    },
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  imageBoxPortrait: {
    marginBottom: '4.9vh',
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    },
    [theme.breakpoints.down('lg')]: {
      maxWidth: '1200px'
    }
  },
  stepperBox: {
    justifyContent: 'flex-start',
    width: '100%',
    marginBottom: '7vh',
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  }
});

export default function NameAndTitle(props): React.JSX.Element {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const strFirstName: string = 'Maxens';
  const strLastName: string = 'Destiné';
  const strJobTitle: string = t('job-title');
  const strJobDesc: string = t('job-desc');
  const strImageAlt: string = t('image-maxens-alt');
  const image = theme.palette.mode === 'dark' ? ImgCoffeeBW : ImgCoffee;

  function ProfileImage(): React.JSX.Element {
    return (
      <Box>
        <Box sx={Styles(theme).imageBoxLandscape}>
          <img
            style=
            {{
              borderRadius: '10px',
              width: 'auto',
              height: '20vh'
            }}
            className='profile-img'
            src={image}
            alt={strImageAlt}
          />
        </Box>
        <Box sx={Styles(theme).imageBoxPortrait}>
          <img
            style={{ borderRadius: '10px' }}
            width='100%'
            className='profile-img'
            src={image}
            alt={strImageAlt}
          />
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={Styles(theme).root} {...props}>
      <Typography
        fontWeight='bold'
        variant='h3'
        color='primary'
        marginBottom='0.5vh'>
        {strFirstName} {strLastName}
      </Typography>
      <Typography
        variant='h5'
        color='primary'
        marginBottom='2.2vh'>
        {strJobTitle}
      </Typography>
      <Typography
        variant='body1'
        color='secondary'
        maxWidth='350px'
        marginBottom='4.9vh'>
        {strJobDesc}
      </Typography>
      <ProfileImage />
      <Box sx={Styles(theme).stepperBox}>
        <MyStepper />
      </Box>
      <Box flexGrow='1'></Box>
      <ContactMediaBar paddingBottom={{ sm: 0, lg: '3.2vh' }} />
    </Box>
  );
}