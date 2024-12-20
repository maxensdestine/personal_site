import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid2 from '@mui/material/Grid2';
import Link from '@mui/material/Link/Link';
import List from '@mui/material/List/List';
import ListItem from '@mui/material/ListItem/ListItem';
import Typography from '@mui/material/Typography/Typography';
import useTheme from '@mui/material/styles/useTheme';

export interface PastXP {
  desc: string;
  link: string;
  location: string | null;
  skills: string[];
  title: string;
}

const Styles = (theme) => ({
  cardSkill: {
    padding: '5px 12px',
    borderRadius: '15px',
    boxShadow: 'none',
    background: theme.palette.mode == 'dark' ? '#102731' : '#e8f8ff',
  },
  descList: {
    listStyleType: 'circle',
    color: theme.palette.secondary.main,
    paddingLeft: '16px'
  },
  cardTitle: {
    display: 'block',
    fontWeight: '500',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
    '&:hover > span': {
      transition: 'transform-origin 200ms, scale 200ms',
      transformOrigin: '-20px 20px',
      scale: '1.15',
    }
  }
});

export default function PastXPCard(props): React.JSX.Element {
  const theme = useTheme();
  const { pastXP, ...rest } = props;

  function getTitle() {
    if (pastXP.location) {
      return pastXP.title + ' · ' + pastXP.location;
    } else {
      return pastXP.title;
    }
  }

  function TitleAndDesc(props): React.JSX.Element {
    return (
      <Box {...props}>
        <Link
          sx={Styles(theme).cardTitle}
          variant='body1'
          color='primary'
          href={pastXP.link}
          target='_blank'
          rel='noreferrer'>
          {getTitle()}
          {<Box
            component='span'
            display='inline-block'
            height='100%'
            whiteSpace='pre'>
            {' ↗'}
          </Box>}
        </Link>
        <List sx={Styles(theme).descList} >
          {pastXP.desc.split('. ').map((oneliner, i) => (
            <ListItem
              key={i}
              sx={{ display: 'list-item', padding: '10px 0px 0px 10px' }}>
              <Typography
                variant='body1'
                fontSize={14.5}
                color='secondary'>
                {oneliner}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>);
  }

  function Skills(props): React.JSX.Element {
    return (
      <Grid2
        {...props}
        container
        gap={1}
        flexDirection='row'>
        {pastXP.skills.map((skill, i) => (
          <Card
            key={i}
            sx={Styles(theme).cardSkill}>
            <Typography
              variant='body1'
              color={theme.palette.mode == 'dark' ? '#5eead4' : '#1c6359'}
              fontSize={13}>
              {skill}
            </Typography>
          </Card>
        ))}
      </Grid2>);
  }

  return (
    <Box {...rest}>
      <TitleAndDesc paddingBottom={2} />
      <Skills />
    </Box>
  );
}