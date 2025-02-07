import { useState, useEffect, ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

interface ThemeProviderProps {
    children: (props: { darkMode: boolean; handleToggleDarkMode: () => void }) => ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
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

    const handleToggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            {children({ darkMode, handleToggleDarkMode })}
        </MuiThemeProvider>
    );
};

export default ThemeProvider;
