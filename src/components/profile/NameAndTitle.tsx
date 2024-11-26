import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography/Typography';
import useTheme from '@mui/material/styles/useTheme';
import { useTranslation } from 'react-i18next';

import ContactMediaBar from './ContactMediaBar';
import ImgCoffee from '../../images/me_anywhere/coffee.jpg';
import ImgCoffeeBW from '../../images/me_anywhere/coffee_bw.jpg';
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
  imageBox: {
    marginBottom: 6,
    [theme.breakpoints.up('lg')]: {
      maxWidth: '100%'
    },
    [theme.breakpoints.down('lg')]: {
      maxWidth: '1200px'
    }
  }
});

export default function NameAndTitle(): React.JSX.Element {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const strFirstName: string = 'Maxens';
  const strLastName: string = 'Destiné';
  const strJobTitle: string = t('job-title');
  const strJobDesc: string = t('job-desc');
  const strImageAlt: string = t('image-maxens-alt');
  const image = theme.palette.mode === 'dark' ? ImgCoffeeBW : ImgCoffee;

  return (
    <Box sx={Styles(theme).root}>
      <Typography
        fontWeight='bold'
        variant='h3'
        color='primary'
        marginBottom={1}>
        {strFirstName} {strLastName}
      </Typography>
      <Typography
        variant='h5'
        color='primary'
        marginBottom={3}>
        {strJobTitle}
      </Typography>
      <Typography
        variant='body1'
        color='secondary'
        maxWidth='350px'
        marginBottom={8}>
        {strJobDesc}
      </Typography>
      <Box sx={Styles(theme).imageBox}>
        <img
          style={{ borderRadius: '10px' }}
          width='100%'
          src={image}
          alt={strImageAlt}
        />
      </Box>
      <Box flexGrow='1'></Box>
      <ContactMediaBar paddingBottom={4} />
    </Box>
  );
}