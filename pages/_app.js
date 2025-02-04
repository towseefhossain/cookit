import { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Switch from '@mui/material/Switch';
import { AppBar, Toolbar, Typography, Container, Box, Button } from '@mui/material';
import Link from 'next/link';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (typeof document !== 'undefined') {
            if (darkMode) {
                document.body.classList.add('dark-mode');
                document.body.classList.remove('light-mode');
            } else {
                document.body.classList.add('light-mode');
                document.body.classList.remove('dark-mode');
            }
        }
    }, [darkMode]);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    });

    const handleToggle = () => {
        setDarkMode(!darkMode);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Head>
                <title>CookIt</title>
                <meta name="description" content="Your ultimate cooking companion" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        CookIt
                    </Typography>
                    <Button color="inherit" component={Link} href="/">Home</Button>
                    <Button color="inherit" component={Link} href="/about">About</Button>
                    <Button color="inherit" component={Link} href="/skilltrees/basic">Skill Trees</Button>
                    <Button color="inherit" component={Link} href="/recipes">Recipes</Button>
                    <Switch checked={darkMode} onChange={handleToggle} />
                </Toolbar>
            </AppBar>
            <Container>
                <Box my={4}>
                    <Component {...pageProps} />
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default MyApp;