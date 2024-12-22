import React from 'react';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Grid2';
import Typography from '@mui/material/Typography/Typography';
import useTheme from '@mui/material/styles/useTheme';
import { useTranslation } from 'react-i18next';

import PastXPCard from './PastXP';

export default function Experience(props): React.JSX.Element {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const nbWorkExperiences = 3;
  const strExperience: String = t('experience');

  function ExperienceCard(props): React.JSX.Element {
    const { pastWorkXP, ...rest } = props;

    function DateInterval(props): React.JSX.Element {
      return (
        <Box
          {...props}
          paddingTop={{ xs: 0, sm: 0.4 }}>
          <Typography
            variant='body1'
            fontSize={12}
            fontWeight={600}
            color='secondary'
            letterSpacing='0.1em'
            whiteSpace='pre'>
            {pastWorkXP.dateBegin.toLocaleUpperCase() + '  —  ' + pastWorkXP.dateEnd.toLocaleUpperCase()}
          </Typography>
        </Box>
      );
    }

    return (
      <Grid2
        {...rest}
        container
        flexDirection={{ xs: 'column', sm: 'row' }}
        gap={{ xs: 1, sm: '9vw', lg: 6 }}>
        <Grid2 >
          <DateInterval />
        </Grid2>
        <Grid2 size='grow'>
          <PastXPCard pastXP={pastWorkXP} />
        </Grid2>
      </Grid2>
    );
  }

  return (
    <Grid2
      {...props}
      container
      direction='column'
      gap={10}>
      {Array(nbWorkExperiences).fill(0).map((_, i) => (
        <ExperienceCard
          key={i}
          pastWorkXP={{
            dateBegin: t('past-work-date-begin-' + i),
            dateEnd: t('past-work-date-end-' + i),
            desc: t('past-work-desc-' + i),
            link: t('past-work-link-' + i),
            location: t('past-work-location-' + i),
            skills: t('past-work-skills-' + i).split(','),
            title: t('past-work-title-' + i)
          }}
        />))}
    </Grid2>
  );
}