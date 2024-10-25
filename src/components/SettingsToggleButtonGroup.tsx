import React, { useContext } from 'react';
import Anchor from '@mui/icons-material/Anchor';
import BakeryDining from '@mui/icons-material/BakeryDining';
import Box from '@mui/material/Box';
import DarkMode from '@mui/icons-material/DarkMode';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Unstable_Grid2';
import InputLabel from '@mui/material/InputLabel';
import LightMode from '@mui/icons-material/LightMode';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import SettingsBrightness from '@mui/icons-material/SettingsBrightness';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import { Appearance, AppearanceContext } from '../components/AppearanceContext';

interface ButtonInfo {
  icon: JSX.Element;
  title: string;
  value: any;
  ariaLabel: string;
}

interface ToggleGroupInfo {
  title: string;
  value: any;
  onChange: (event: React.MouseEvent<HTMLElement>, newValue: any | null,) => void;
  ariaLabel: string;
  buttonInfoList: Array<ButtonInfo>;
}

interface ToggleSelectorProp {
  toggleGroupInfo: ToggleGroupInfo,
  props: any
}

function GeneralToggleSelector(properties: ToggleSelectorProp) {
  const info: ToggleGroupInfo = properties.toggleGroupInfo;
  const buttonWidth = 1 / info.buttonInfoList.length;
  const handleChangeSelect = (event: SelectChangeEvent) => {
    if (event.target.value)
      info.onChange(null, event.target.value);
  };
  const myOnChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: any | null,
  ) => {
    if (newValue)
      info.onChange(null, newValue);
  };
  return (
    <Box>
      <Box sx={{ display: { xs: 'none', sm: 'none', md: 'inline', lg: 'inline' } }}>
        <Typography sx={{ m: 1, mt: 3, color: 'text.secondary' }} variant='body2'>{info.title}</Typography>
        <ToggleButtonGroup
          value={info.value}
          exclusive
          onChange={myOnChange}
          aria-label={info.ariaLabel}
          {...properties.props}>
          {info.buttonInfoList.map((buttonInfo, index) => (
            <ToggleButton sx={{ width: buttonWidth }}
              value={buttonInfo.value}
              aria-label={buttonInfo.ariaLabel}
              key={index}>
              {buttonInfo.icon}
              <Typography sx={{ p: 1 }} variant='overline'>{buttonInfo.title}</Typography>
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>
      <Box sx={{ display: { xs: 'inline', sm: 'inline', md: 'none', lg: 'none' } }}>
        <FormControl fullWidth>
          <InputLabel id={info.title + '-label'}>{info.title}</InputLabel>
          <Select
            labelId={info.title + '-label'}
            id={info.title + '-id'}
            value={info.value}
            label={info.title}
            onChange={handleChangeSelect}
            aria-label={info.ariaLabel}
            {...properties.props}>
            {info.buttonInfoList.map((buttonInfo, index) => (
              <MenuItem value={buttonInfo.value}
                key={index}
                aria-label={buttonInfo.ariaLabel}>
                <Grid container
                  direction='row'
                  columnSpacing={1.4}
                  alignItems='center'>
                  <Grid paddingTop={0.7}>
                    {buttonInfo.icon}
                  </Grid>
                  <Grid>
                    {buttonInfo.title}
                  </Grid>
                </Grid>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}

export function AppearanceSelector(props) {
  const appearance = useContext(AppearanceContext);
  const handleBrightnessMode =
    (
      event: React.MouseEvent<HTMLElement>,
      newBrightnessMode: Appearance | null,
    ) => { appearance.setValue(newBrightnessMode); };
  const groupInfo: ToggleGroupInfo =
  {
    title: 'Appearance',
    value: appearance.value,
    onChange: handleBrightnessMode,
    ariaLabel: 'brightness settings',
    buttonInfoList:
      [
        {
          icon: <LightMode />,
          title: 'Light', value: 'light', ariaLabel: 'use light mode'
        },
        {
          icon: <SettingsBrightness />,
          title: 'System', value: 'system', ariaLabel: 'use system mode'
        },
        {
          icon: <DarkMode />,
          title: 'Dark', value: 'dark', ariaLabel: 'use dark mode'
        }
      ]
  };
  return GeneralToggleSelector({ props: props, toggleGroupInfo: groupInfo });
}

export function LanguageSelector(props) {
  const [language, setLanguage] = React.useState<string | null>('eng');
  const handleLanguage = (
    event: React.MouseEvent<HTMLElement>,
    newLanguage: string | null,
  ) => {
    setLanguage(newLanguage);
  };

  const groupInfo: ToggleGroupInfo =
  {
    title: 'Language',
    value: language,
    onChange: handleLanguage,
    ariaLabel: 'language settings',
    buttonInfoList:
      [
        {
          icon: <Anchor />, title: 'English', value: 'eng', ariaLabel: 'use english'
        },
        {
          icon: <BakeryDining />, title: 'Français', value: 'fr', ariaLabel: 'utiliser le français'

        }
      ]
  };

  return GeneralToggleSelector({ props: props, toggleGroupInfo: groupInfo });
}