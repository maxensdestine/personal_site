import React, { useContext, useEffect, useRef } from "react";
import createTheme from "@mui/material/styles/createTheme";
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from "@mui/material/IconButton/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import NameAndTitle from "./NameAndTitle";
import responsiveFontSizes from "@mui/material/styles/responsiveFontSizes";
import styled from "@mui/material/styles/styled";
import TemporaryDrawer from "../components/TemporaryDrawer";
import { Appearance, AppearanceContext } from '../components/AppearanceContext';
import { PaletteMode } from "@mui/material";
import { Theme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { useState } from 'react';

const Styles = {
  icon: {
    color: '#ffffff',
    fontSize: 42,
  }
};

const RootGrid = styled(Grid)(({ theme }) => ({

  [theme.breakpoints.down('sm')]: {
    paddingInline: 18,
    paddingTop: 28,
    paddingBottom: 28
  },
  [theme.breakpoints.up('sm')]: {
    paddingInline: 36,
    paddingTop: 28,
    paddingBottom: 28
  },
  [theme.breakpoints.up('md')]: {
    paddingInline: 56,
    paddingTop: 28,
    paddingBottom: 28
  },
  [theme.breakpoints.up('lg')]: {
    paddingInline: 68,
    paddingTop: 28,
    paddingBottom: 28
  },
}));

export default function LandingPage(): React.JSX.Element {
  const appearanceContext = useContext(AppearanceContext);
  const [appearance, setAppearance, appearanceRef] = useStateRef<Appearance>(appearanceContext.value);
  const [muiTheme, setMuiTheme] = useState<Theme>(getTheme());
  const [isOpen, setOpen] = useState<boolean>(false);
  useEffect(() => {
    setMuiTheme(getTheme());
  }, [appearance]);

  useEffect(() => {
    // Add listener to update styles
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',
      darkQuery => {
        setMuiTheme(getTheme());
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
    // when a "useEffect" with "value" as dependency is called
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
    let muiTheme = createTheme({
      palette: {
        mode: paletteModeFromAppearance(appearanceRef.current),
      }
    });
    muiTheme = responsiveFontSizes(muiTheme);
    return muiTheme;
  }

  function paletteModeFromAppearance(appearance: Appearance): PaletteMode {
    if (appearance === "light" || appearance === "dark") {
      return appearance;
    } else {
      const darkThemeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      if (darkThemeMediaQuery.matches) {
        return "dark";
      } else {
        return "light";
      }
    }
  }

  function toggleDrawer(newOpen: boolean): () => void {
    return () => { setOpen(newOpen) };
  };

  return (
    <AppearanceContext.Provider value={{ value: appearanceRef.current, setValue: setAppearance }}>
      <ThemeProvider theme={muiTheme}>
        <TemporaryDrawer isOpen={isOpen} onClose={toggleDrawer(false)}
          setAppearance={setAppearance}>
        </TemporaryDrawer>
        <IconButton sx={{ mt: '3vh', ml: '4vw', position: 'absolute' }}
          onClick={toggleDrawer(true)}>
          <MenuIcon sx={Styles.icon} />
        </IconButton>
        <NameAndTitle />
      </ThemeProvider>
    </AppearanceContext.Provider>
  );
}