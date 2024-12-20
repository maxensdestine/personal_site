import React from 'react';
import Box from '@mui/material/Box';
import Email from '@mui/icons-material/Email';
import Facebook from '@mui/icons-material/Facebook';
import GitHub from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import LinkedIn from '@mui/icons-material/LinkedIn';

interface IconAndTitle {
  icon: JSX.Element;
  title: string;
  link: string;
}

const Styles = {
  icon: {
    fontSize: 28,
  },
  root: {
    display: 'inline'
  }
};

export default function ContactMediaBar(props) {
  const contacts: Array<IconAndTitle> =
    [
      {
        icon: <GitHub sx={Styles.icon} color='secondary' />,
        title: 'GitHub',
        link: 'https://github.com/maxensdestine'
      },
      {
        icon: <LinkedIn sx={Styles.icon} color='secondary' />,
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/maxens-destin%C3%A9/'
      },
      {
        icon: <Facebook sx={Styles.icon} color='secondary' />,
        title: 'Facebook',
        link: 'https://www.facebook.com/profile.php?id=100009190280720'
      },
      {
        icon: <Email sx={Styles.icon} color='secondary' />,
        title: 'Email',
        link: 'mailto:maxensdestine@gmail.com'
      },
    ];
  return (
    <Box sx={Styles.root} {...props}>
      {contacts.map((contact, index) => (
        <a
          key={index}
          href={contact.link}
          target='_blank'
          rel='noreferrer'>
          <IconButton>
            {contact.icon}
          </IconButton>
        </a>
      ))}
    </Box>
  );
}