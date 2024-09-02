import React from "react";
import Box from "@mui/material/Box"
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from "@mui/material/IconButton/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import styled from "@mui/material/styles/styled";

import imgNameBackground from "../images/me_anywhere/coffee_B&W_Cool_3.jpg";
import TemporaryDrawer from "../components/TemporaryDrawer";
import NameAndTitle from "./NameAndTitle";

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

export default function LandingPage(props): React.JSX.Element {
    const [isOpen, setOpen] = React.useState(false);

    function toggleDrawer(newOpen: boolean): () => void {
        return () => { setOpen(newOpen) };
    };

    return (
    <Box>
        <TemporaryDrawer isOpen={isOpen} onClose={toggleDrawer(false)}></TemporaryDrawer>
        <IconButton sx={{mt: 4, ml: 8.5, position: 'absolute'}} onClick={toggleDrawer(true)}>
            <MenuIcon sx={Styles.icon} />
        </IconButton>
        <NameAndTitle/>
    </Box>
    );
}