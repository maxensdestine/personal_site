import React from 'react';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Grid2';
import Link from '@mui/material/Link/Link';
import Typography from '@mui/material/Typography/Typography';
import useTheme from '@mui/material/styles/useTheme';
import { useTranslation } from 'react-i18next';

const Styles = {
  link: {
    fontSize: 12,
    height: 35,
    fontWeight: '570',
    letterSpacing: '0.1em',
    scrollBehavior: 'smooth',
    display: 'block',
    textDecoration: 'none',
    ' > div > span': {
      width: '30px',
      transition: 'width 150ms ease-in-out'
    },
    '&:hover > div > p': {
      color: 'primary.main'
    },
    '&:hover > div > span': {
      width: '60px',
      backgroundColor: 'text.primary'
    }
  }
};

export default function MyStepper(props): React.JSX.Element {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const steps = ['about', 'experience', 'education', 'projects'];
  const { currentSection, rest } = props;

  function getColorForSection(index) {
    if (index == currentSection) {
      return theme.palette.primary.main;
    } else {
      return theme.palette.info.main;
    }
  }

  return (
    <Grid2
      {...rest}
      container
      direction='row'>
      {steps.map((title, i) => (
        <Grid2
          size={6} >
          <Link
            key={i}
            sx={Styles.link}
            href={'#' + (i == 0 ? 'top' : title)}>
            <Grid2
              container
              alignItems='center'
              gap={2.5}
              rowSpacing={2} >
              <Box
                component='span'
                display='inline-block'
                height='1px'
                bgcolor={getColorForSection(i)} />
              <Typography
                variant='body1'
                color={getColorForSection(i)}
                fontSize={12}
                fontWeight='570'
                letterSpacing='0.1em'>
                {title.toLocaleUpperCase()}
              </Typography>
            </Grid2>
          </Link>
        </Grid2>
      ))}
    </Grid2>
  );
}