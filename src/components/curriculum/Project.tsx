import React from 'react';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Grid2';
import Typography from '@mui/material/Typography/Typography';
import useTheme from '@mui/material/styles/useTheme';
import { useTranslation } from 'react-i18next';

import PastXPCard from './PastXP';
import McGillSeal from '../../resources/images/projects/mcgill_seal.png';
import PictureRetriever from '../../resources/images/projects/picture_retriever.png';
import RedYoinker from '../../resources/images/projects/red_yoinker.png';
import Slick2d from '../../resources/images/projects/slick2d.png';

export default function Project(props): React.JSX.Element {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const projectImages: Array<string> = [McGillSeal, PictureRetriever, RedYoinker, Slick2d];
  const strProjects: String = t('projects');

  function ProjectCard(props): React.JSX.Element {
    const { pastProjectXP, ...rest } = props;

    function ProjectImage(props): React.JSX.Element {
      return (
        <Box
          {...props}
          paddingTop={{ xs: 0, sm: 0.4 }}
          width='100%'>
          <img
            style={{ borderRadius: '10px' }}
            width='100%'
            src={pastProjectXP.image}
            alt={pastProjectXP.imageAlt}
          />
        </Box>
      );
    }

    return (
      <Grid2
        {...rest}
        container
        flexDirection={{ xs: 'column-reverse', sm: 'row' }}
        gap={{ xs: 3, sm: '9vw', lg: 6 }}>
        <Grid2
          width={{ xs: '200px', sm: '200px', lg: '135px' }}>
          <ProjectImage />
        </Grid2>
        <Grid2 size='grow'>
          <PastXPCard pastXP={pastProjectXP} />
        </Grid2>
      </Grid2>
    );
  }

  function pastXPToProjectXP(projectImage, i) {
    const title: string = t('past-project-title-' + i);
    let location: string | null = null;
    if (i18n.exists('past-project-location-' + i))
      location = t('past-project-location-' + i);
    return (
      <ProjectCard
        key={i}
        pastProjectXP={{
          image: projectImage,
          imageAlt: t('past-project-image-alt') + title,
          desc: t('past-project-desc-' + i),
          link: t('past-project-link-' + i),
          location: location,
          skills: t('past-project-skills-' + i).split(','),
          title: title
        }} />);
  }

  return (
    <Grid2
      container
      direction='column'
      gap={10}>
      {projectImages.map(pastXPToProjectXP)}
    </Grid2>
  );
}