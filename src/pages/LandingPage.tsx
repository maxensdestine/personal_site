import React, { useContext, useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box'
import createTheme, { Theme } from '@mui/material/styles/createTheme';
import Grid2 from '@mui/material/Grid2';
import Headroom from 'react-headroom';
import IconButton from '@mui/material/IconButton/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { PaletteMode } from '@mui/material/styles/createPalette';
import responsiveFontSizes from '@mui/material/styles/responsiveFontSizes';
import TemporaryDrawer from '../components/side_menu/TemporaryDrawer';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Typography from '@mui/material/Typography/Typography';
import { useTranslation } from 'react-i18next';

import { addMouseGlow, removeMouseGlow } from '../components/MouseGlow';
import { Appearance, AppearanceContext } from '../components/side_menu/AppearanceContext';
import Curriculum from '../components/curriculum/Curriculum';
import NameAndTitle from '../components/profile/NameAndTitle';

const Styles = (theme) => ({
  halo: {
    [theme.breakpoints.up('lg')]: {
      display: 'block'
    },
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  icon: {
    fontSize: 40
  },
  iconBox: {
    justifyContent: 'center',
    [theme.breakpoints.up('lg')]: {
      display: 'block',
      height: '40px',
      top: '0px',
      paddingLeft: '12px',
      position: 'sticky'
    },
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  background: {
    bgcolor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('lg')]: {
      minWidth: '350px',
      minHeight: '93vh',
      flexGrow: '1',
    },
    [theme.breakpoints.down('lg')]: {
      minWidth: '350px',
      minHeight: '620px',
      flexGrow: '1',
    }
  },
  contentRoot: {
    display: 'flex',
    justifyContent: 'center',
    gap: '6px',

    [theme.breakpoints.up('lg')]: {
      paddingTop: '56px',
      flexDirection: 'row',
      width: '93vw',
      marginRight: 'auto',
      marginLeft: 'auto',
    },
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'column',
      width: '85vw',
      paddingTop: '8vh',
      marginRight: 'auto',
      marginLeft: 'auto',
    }
  },
  header: {
    height: '40px',
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    },
    [theme.breakpoints.down('lg')]: {
      display: 'block',
    }
  },
  leftContent: {
    flexGrow: '0',
    [theme.breakpoints.up('lg')]: {
      width: '430px',
      minWidth: '400px',
      maxHeight: 'calc(95vh - 88px)',
      overflowY: 'auto',
      overflowX: 'hidden',
      paddingLeft: '1vw',
      top: '96px',
      position: 'sticky'
    },
    [theme.breakpoints.down('lg')]: {
    }
  },
  middleSpace: {
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      minWidth: '150px',
      maxWidth: '200px',
      flexGrow: '1',
    },
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  rightContent: {
    flexGrow: '0',
    [theme.breakpoints.up('lg')]: {
      maxWidth: '620px',
    }
  }
});

export default function LandingPage(props): React.JSX.Element {
  const { t, i18n } = useTranslation();
  const appearanceContext = useContext(AppearanceContext);
  const [appearance, setAppearance, appearanceRef] = useStateRef<Appearance>(appearanceContext.value);
  const [theme, setTheme] = useState<Theme>(getTheme());
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isHeaderPin, setHeaderPin] = useState<boolean>(true);
  const backgroundID = 'background';
  const selectorBackground = '#' + backgroundID;
  const strPorfolio = t('portfolio');

  useEffect(() => {
    const nextTheme = getTheme();
    setTheme(nextTheme);
  }, [appearance]);

  useEffect(() => {
    const bgColor: string = Styles(theme).background.bgcolor;
    removeMouseGlow(selectorBackground);
    if (theme.palette.mode == 'dark') {
      addMouseGlow(selectorBackground, bgColor);
    }
    document.body.style.setProperty('--bg-color', bgColor);
    return () => { removeMouseGlow(selectorBackground) };
  }, [theme]);

  useEffect(() => {
    // Add listener to update styles
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',
      darkQuery => {
        setTheme(getTheme());
      });
    // Remove listener
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {
      });
    }
  }, []);

  function useStateRef<Type>(initialValue: Type):
    [Type, React.Dispatch<React.SetStateAction<Type>>,
      React.MutableRefObject<Type>] {
    // InnerValue and innerSetValue guarantee that the ref will be updated 
    // when a 'useEffect' with 'value' as dependency is called
    const [value, setValue] = useState(initialValue);
    const [innerValue, innerSetValue] = useState(initialValue);
    const ref = useRef(initialValue);

    useEffect(() => {
      ref.current = innerValue;
      setValue(innerValue);
    }, [innerValue]);
    return [value, innerSetValue, ref];
  }

  function getTheme(): Theme {
    const mode: PaletteMode = paletteModeFromAppearance(appearanceRef.current);
    const paletteDark = {
      mode: mode,
      primary: {
        main: '#eceded'
      },
      secondary: {
        main: '#bbbbbb'
      },
      info: {
        main: '#8c8e93'
      },
      background: {
        default: '#0f172a',
        paper: '#0f1725'
      },
    };
    const paletteLight = {
      mode: mode,
      primary: {
        main: '#232931'
      },
      secondary: {
        main: '#494e57'
      },
      info: {
        main: '#8b8e94'
      },
      background: {
        default: '#ffffff',
        paper: '#fcfcfc'
      },
    };
    let muiTheme = createTheme({
      palette: mode === 'dark' ? paletteDark : paletteLight,
      typography: {
        fontFamily: 'Inter, sans-serif'
      },
    });
    muiTheme = responsiveFontSizes(muiTheme);
    return muiTheme;
  }

  function paletteModeFromAppearance(appearance: Appearance): PaletteMode {
    if (appearance === 'light' || appearance === 'dark') {
      return appearance;
    } else {
      const darkThemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      if (darkThemeMediaQuery.matches) {
        return 'dark';
      } else {
        return 'light';
      }
    }
  }

  function IconBox(): React.JSX.Element {
    return (
      <IconButton
        onClick={toggleDrawer(true)}>
        <MenuIcon sx={Styles(theme).icon} color='secondary' />
      </IconButton>
    );
  }

  function toggleDrawer(newOpen: boolean): () => void {
    return () => { setOpen(newOpen) };
  }

  function headerBoxShadow(): string {
    let headerBoxShadow = '1px 1px 1px ';
    if (!isHeaderPin) {
      return 'none';
    } else if (theme.palette.mode == 'dark') {
      return headerBoxShadow + 'rgba(255, 255, 255, 0.15)';
    } else {
      return headerBoxShadow + 'rgba(0,0,0,0.15)';
    }
  }

  return (
    <AppearanceContext.Provider value={{ value: appearanceRef.current, setValue: setAppearance }}>
      <ThemeProvider theme={theme}>
      <Box
            id='halo-container'
            sx={Styles(theme).halo}
            className='mouse-halo-container'>
            <Box
              id='halo'
              sx={Styles(theme).halo}
              className='mouse-halo'>
            </Box>
          </Box>
        <Box sx={Styles(theme).background} id={backgroundID} {...props}>
          <TemporaryDrawer isOpen={isOpen} onClose={toggleDrawer(false)}>
          </TemporaryDrawer>
          <Box sx={Styles(theme).iconBox}>
            <IconBox />
          </Box>
          <Box sx={Styles(theme).header}>
            <Headroom
              onPin={() => { setHeaderPin(true) }}
              onUnpin={() => { setHeaderPin(false) }}
              style={{
                background: theme.palette.background.paper,
                boxShadow: headerBoxShadow(),
                padding: '0px 23px 0px 12px',
                flexGrow: '1'
              }}>
              <Grid2
                container
                justifyContent='space-between'
                flexDirection='row'
                flexGrow='1'
                alignItems='center'>
                <IconBox />
                <Typography
                  textAlign='center'
                  variant='h6'
                  color='secondary'
                  display='inline'>
                  {strPorfolio}
                </Typography>
              </Grid2>
            </Headroom>
          </Box>
          <Box sx={Styles(theme).contentRoot}>
            <Box sx={Styles(theme).leftContent}>
              <NameAndTitle />
            </Box>
            <Box sx={Styles(theme).middleSpace}></Box>
            <Box sx={Styles(theme).rightContent}>
              <Curriculum paddingBottom={10} />
            </Box >
          </Box >
        </Box >
      </ThemeProvider>
    </AppearanceContext.Provider >
  );
}