import React from 'react';
import Box from '@mui/material/Box';
import Experience from './Experience';
import Education from './Education';
import Project from './Project';
import Summary from './Summary';
import { useTheme } from '@mui/material';

const Styles = (theme) => ({
  root: {
    flexDirection: 'column'
  }
});

export default function Curriculum(props): React.JSX.Element {
  const theme = useTheme();
  return (
    <Box {...props}>
      <Summary paddingBottom={18}/>
      <Experience></Experience>
      <Education></Education>
      <Project></Project>
    </Box>);
}