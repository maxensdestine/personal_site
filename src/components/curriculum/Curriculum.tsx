import React from 'react';
import Box from '@mui/material/Box';
import Experience from './Experience';
import Education from './Education';
import Project from './Project';
import Summary from './Summary';
import { useTheme } from '@mui/material';

const Styles = (theme) => ({
  root: {
    // display: 'flex',
    // flexDirection: 'column',

    // [theme.breakpoints.up('lg')]: {
    //   height: '80vh',
    //   overflowY: 'scroll'
    // },
    // [theme.breakpoints.down('lg')]: {
    // }
  }
});

export default function Curriculum(props): React.JSX.Element {
  const theme = useTheme();
  return (
    <Box sx={Styles(theme).root}>
      <Summary>
      </Summary>
      <Experience></Experience>
      <Education></Education>
      <Project></Project>
    </Box>);
}