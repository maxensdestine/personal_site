import React from "react";
import Box from "@mui/material/Box"
import Grid from '@mui/material/Unstable_Grid2';
import styled from "@mui/material/styles/styled";
import Typography from "@mui/material/Typography/Typography";

import imgNameBackground from "../images/me_anywhere/coffee_B&W_Cool_3.jpg";

const Styles = {
    background: {
        backgroundImage: `url(${imgNameBackground})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        width: '100vw',
        height: '100%',
        minHeight: '100vh',
        display: 'flex',
    }
};

const RootGrid = styled(Grid)(({ theme }) => ({

    [theme.breakpoints.down('sm')]: {
        paddingInline: 18,
        paddingTop: 18,
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

const TypographyName = styled(Typography)({
    textAlign: 'center',
    fontFamily: 'initial',
    fontWeight: 'bold',
    textShadow: '0px 5px 5px dimGray, 0px 7px 7px #a3a3a3, 0px 9px 9px #a3a3a3',
    color: 'white',
    component: 'div',
});

export default function NameAndTitle(props): React.JSX.Element {
    const strFirstName: String = 'Maxens';
    const strLastName: String = 'Destiné ';
    const strJobTitle: String = 'Software Engineer';
    const strAnd: String = '&';
    const strMuchMore: String = 'so much more';


    return (
    <Box sx={Styles.background} {...props}>
        <RootGrid
            container
            direction='row'
            justifyContent='space-between'
            flexGrow='1'>
            <Box/>
            <Grid
                container
                direction='column'
                justifyContent='space-between'>
                <Grid marginBottom={2}>
                    <TypographyName variant='h2'>{strFirstName}</TypographyName>
                    <TypographyName variant='h2'>{strLastName}</TypographyName>
                </Grid>
                <Grid sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'inline' } }}>
                    <TypographyName variant='h3'>{strJobTitle}</TypographyName>
                    <TypographyName variant='h4'>{strAnd}</TypographyName>
                    <TypographyName variant='h4'>{strMuchMore}</TypographyName>
                </Grid>
                <Grid sx={{ display: { xs: 'none', sm: 'none', md: 'inline', lg: 'none' } }}>
                    <TypographyName variant='h4'>{strJobTitle}</TypographyName>
                    <TypographyName variant='h5'>{strAnd}</TypographyName>
                    <TypographyName variant='h5'>{strMuchMore}</TypographyName>
                </Grid>
                <Grid></Grid>
                <Grid></Grid>
            </Grid>
        </RootGrid>
    </Box >
    );
}