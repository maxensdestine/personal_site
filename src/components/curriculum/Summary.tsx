import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography/Typography';
import useTheme from '@mui/material/styles/useTheme';
import { useTranslation } from 'react-i18next';

const Styles = (theme) => ({
  sectionTitle: {
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    },
    [theme.breakpoints.down('lg')]: {
      marginTop: 10,
      marginBottom: 3,
      color: 'primary',
      variant: 'body1'
    }
  }
});

export default function Summary(props): React.JSX.Element {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const strAbout: String = t('about');
  const strSummary0: String = t('summary-0');
  const strSummary1: String = t('summary-1');
  const strSummary2: String = t('summary-2');
  const strSummary3: String = t('summary-3');
  return (
    <Box>
      <Typography
      sx={Styles(theme).sectionTitle}
      variant='body1'
      color='primary'>
        {strAbout}
      </Typography>
      <Typography variant='body1' color='secondary'>
        {strSummary0}
      </Typography>
      <br />
      <Typography variant='body1' color='secondary'>
        {strSummary1}
      </Typography>
      <br />
      <Typography variant='body1' color='secondary'>
        {strSummary2}
      </Typography>
      <br />
      <Typography variant='body1' color='secondary'>
        {strSummary3}
      </Typography>
    </Box>
  );
}