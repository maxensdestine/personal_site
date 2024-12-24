import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link/Link';
import Typography from '@mui/material/Typography/Typography';
import useTheme from '@mui/material/styles/useTheme';
import { useTranslation } from 'react-i18next';

const Styles = (theme) => ({
  link: {
    fontSize: 12,
    height: 35,
    fontWeight: '600',
    letterSpacing: '0.1em',
    scrollBehavior: 'smooth',
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.mode == 'dark' ? '#5eead4' : '#1c6359'
    }
  }
});

export default function EndWords(props): React.JSX.Element {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const links: string[] = 
  [
    'https://brittanychiang.com/',
    'https://penpot.app/',
    'https://code.visualstudio.com/',
    'https://react.dev/',
    'https://mui.com/material-ui/',
    'https://pages.github.com/',
    'https://rsms.me/inter/'
  ];
  const endWords: string[] = tokenizeEndWords(t('end-words'), links);

  function tokenizeEndWords(endWords: string, links: string[]): string[] {
    let index = 0;
    let nbSpecialsFound = 0;
    let open = endWords.indexOf('[');
    let end = endWords.indexOf(']');
    let tokens: string[] = [];
    while (open != -1 && end != -1) {
      const prefix: string = endWords.substring(index, open);
      const special = endWords.substring(open + 1, end);
      tokens.push(prefix);
      tokens.push('[' + links.at(nbSpecialsFound) + ']' + special);
      index = end + 1;
      nbSpecialsFound++;
      open = endWords.indexOf('[', index);
      end = endWords.indexOf(']', index);
    }
    if (index < endWords.length) {
      tokens.push(endWords.substring(index));
    }
    return tokens;
  }

  function TypographyFromString(props): React.JSX.Element {
    let { endWord, ...rest } = props;
    if (endWord.at(0) === '[') {
      const open = 0;
      const end = endWord.indexOf(']');
      const link: string = endWord.substring(open + 1, end);
      endWord = endWord.substring(end + 1);
      return (
        <Link
          {...rest}
          sx={Styles(theme).link}
          variant='body1'
          href={link}
          target='_blank'
          rel='noreferrer'
          color={theme.palette.secondary.main}>
          {endWord}
        </Link>);
    } else {
      return (
        <Typography
          {...rest}
          component='span'
          variant='body1'
          color={theme.palette.info.main}>
          {endWord}
        </Typography>);
    }
  }

  return (
    <Box {...props}>
      {endWords.map((endWord, index) => (
        <TypographyFromString
          key={index}
          endWord={endWord}
          fontSize={14}/>
      ))}
    </Box>);
}