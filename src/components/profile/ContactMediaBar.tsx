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
      { icon: <GitHub sx={Styles.icon} color='secondary' />, title: 'GitHub' },
      { icon: <LinkedIn sx={Styles.icon} color='secondary' />, title: 'LinkedIn' },
      { icon: <Facebook sx={Styles.icon} color='secondary' />, title: 'Facebook' },
      { icon: <Email sx={Styles.icon} color='secondary' />, title: 'Email' },
    ];
  return (
    <Box sx={Styles.root} {...props}>
      {contacts.map((contact, index) => (
          <IconButton key={index}>{contact.icon}</IconButton>
      ))}
    </Box>
  );
}