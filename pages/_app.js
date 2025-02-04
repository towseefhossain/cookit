import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Toolbar, Typography, Container, Box, Button } from '@mui/material';
import Head from 'next/head';
import { AuthProvider, useAuth } from '../context/authContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    const [darkMode, setDarkMode] = useState(false);
    const router = useRouter();

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

    const handleToggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <AuthProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Head>
                    <title>CookIt</title>
                    <meta name="description" content="Your ultimate cooking companion" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            CookIt
                        </Typography>
                        <Navigation
                            darkMode={darkMode}
                            handleToggleDarkMode={handleToggleDarkMode}
                        />
                    </Toolbar>
                </AppBar>
                <Container>
                    <Box sx={{ my: 2 }}>
                        <Component {...pageProps} />
                    </Box>
                </Container>
            </ThemeProvider>
        </AuthProvider>
    );
}

const Navigation = ({ darkMode, handleToggleDarkMode }) => {
    const router = useRouter();
    const { isLoggedIn, login, logout } = useAuth();

    const handleLoginLogout = () => {
        if (isLoggedIn) {
            logout();
        } else {
            router.push('/login');
        }
    };

    const handleNavigation = (path) => {
        router.push(path);
    };

    return (
        <>
            <Button color="inherit" onClick={() => handleNavigation('/')}>
                Home
            </Button>
            <Button color="inherit" onClick={() => handleNavigation('/about')}>
                About
            </Button>
            {isLoggedIn && (
                <>
                    <Button color="inherit" onClick={() => handleNavigation('/skilltrees/basic')}>
                        Skilltrees
                    </Button>
                    <Button color="inherit" onClick={() => handleNavigation('/recipes')}>
                        Recipes
                    </Button>
                </>
            )}
            <Button color="inherit" onClick={handleToggleDarkMode}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </Button>
            <Button color="inherit" onClick={handleLoginLogout}>
                {isLoggedIn ? 'Logout' : 'Login'}
            </Button>
        </>
    );
};

export default MyApp;
