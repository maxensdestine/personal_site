import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid2 from '@mui/material/Grid2';
import Typography from '@mui/material/Typography/Typography';
import { useTranslation } from 'react-i18next';

import McGillLogo from '../../resources/images/institution_logos/mcgill_logo.png';
import BdeBLogo from '../../resources/images/institution_logos/bdeb_logo.png';

export default function Education(props): React.JSX.Element {
  const { t, i18n } = useTranslation();
  const institutionImages: Array<string> = [McGillLogo, BdeBLogo];

  function EducationImage(props): React.JSX.Element {
    const { image, imageAlt, ...rest } = props;
    return (
      <Box
        {...rest}
        width='100%'
        height='100%'>
        <img
          style={{ borderRadius: '10px' }}
          width='100%'
          src={image}
          alt={imageAlt}
        />
      </Box>
    );
  }

  function EducationTitleAndDesc(props): React.JSX.Element {
    const { title, desc, ...rest } = props;
    return (
      <Box
        {...rest}
        flexDirection='column'
        width='100%'
        height='100%'>
        <Typography
          fontWeight='500'
          variant='body1'
          display='block'
          color='primary'
          whiteSpace='pre-wrap'>
          {title}
        </Typography>
        <Typography
          variant='body1'
          color='secondary'
          whiteSpace='pre-wrap'>
          {desc}
        </Typography>
      </Box>);
  }

  function EducationCard(props): React.JSX.Element {
    const { index, ...rest } = props;
    const title: string = t('education-title-' + index);
    const desc: string = t('education-desc-' + index);
    const image: string = institutionImages.at(index);
    const imageAlt = t('education-image-alt') + title;
    return (
      <Grid2
        {...rest}
        key={index}
        container
        gap={{ xs: 3, sm: 6, lg: 6 }}>
        <Grid2 width={{ xs: '80px', sm: '100px', lg: '85px' }}>
          <EducationImage
            image={image}
            imageAlt={imageAlt} />
        </Grid2>
        <Grid2 size='grow'>
          <EducationTitleAndDesc
            paddingTop={1}
            title={title}
            desc={desc} />
        </Grid2>
      </Grid2>
    );
  }

  return (
    <Grid2
      {...props}
      container
      spacing={5}>
      {institutionImages.map((_, index) => (
        <Grid2 key={index} size={11}>
          <EducationCard index={index} />
        </Grid2>
      ))}
    </Grid2>
  );
}