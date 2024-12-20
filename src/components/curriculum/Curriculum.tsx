import React from 'react';
import Grid2 from '@mui/material/Grid2';
import { useTheme } from '@mui/material';

import Experience from './Experience';
import Education from './Education';
import Project from './Project';
import Summary from './Summary';

const Styles = (theme) => ({
  root: {
    flexDirection: 'column'
  }
});

export default function Curriculum(props): React.JSX.Element {
  const theme = useTheme();
  return (
    <Grid2
      {...props}
      container
      gap={18}>
      <Summary />
      <Experience></Experience>
      <Project></Project>
      <Education></Education>
    </Grid2>);
}