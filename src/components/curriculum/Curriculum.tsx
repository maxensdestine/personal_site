import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography/Typography';
import { useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

import Experience from './Experience';
import Education from './Education';
import Project from './Project';
import Summary from './Summary';

interface Section {
  content: React.JSX.Element;
  id: string;
}

const Styles = (theme) => ({
  firstAnchorSeparator: {
    [theme.breakpoints.up('lg')]: {
      paddingTop: 0
    },
    [theme.breakpoints.down('lg')]: {
      paddingTop: 10
    },
  },
  anchorSeparator: {
    paddingTop: 7,
    paddingBottom: 7
  },
  sectionHeader: {
    paddingBottom: 6,
    fontWeight: '570',
    letterSpacing: '0.1em',
    color: theme.palette.info.main
  }
});

export default function Curriculum(props): React.JSX.Element {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const idSuffix: string = '-anchor';
  const sections =
    [
      { content: <Summary />, id: 'about' },
      { content: <Experience />, id: 'experience' },
      { content: <Education />, id: 'education' },
      { content: <Project />, id: 'projects' },
    ];

  function idToHeaderName(id: string) {
    if (i18n.exists(id)) {
      return t(id).toLocaleUpperCase();
    }
    return '';
  }

  function getStyleForSection(i: number) {
    if (i === 0) {
      return Styles(theme).firstAnchorSeparator;
    }
    return Styles(theme).anchorSeparator;
  }

  return (
    <Box {...props}>
      {sections.map((section, i) => (
        <Box key={i}>
          <Box sx={getStyleForSection(i)} id={section.id} />
          <Typography
            sx={Styles(theme).sectionHeader}
            variant='body1'>
            {idToHeaderName(section.id)}
          </Typography>
          {section.content}
        </Box>
      ))}
    </Box>);
}