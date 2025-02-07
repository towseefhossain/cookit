import { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import CategoryIcon from '@mui/icons-material/Category';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from '../context/authContext';
import { useRouter } from 'next/router';

interface NavigationProps {
    darkMode: boolean;
    handleToggleDarkMode: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ darkMode, handleToggleDarkMode }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const { isLoggedIn, login, logout } = useAuth();
    const router = useRouter();

    const handleNavigation = (path: string) => {
        router.push(path);
    };

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    const redirectToLogin = () => {
        router.push('/login');
    }

    return (
        <Drawer
            variant="permanent"
            onMouseEnter={handleDrawerOpen}
            onMouseLeave={handleDrawerClose}
            open={drawerOpen}
            className={drawerOpen ? 'drawer-open' : 'drawer-closed'}
            sx={{
                width: drawerOpen ? 240 : 60,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerOpen ? 240 : 60,
                    boxSizing: 'border-box',
                    transition: 'width 0.3s',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                },
            }}
        >
            <List>
                <ListItem component="button" className='menu-item' onClick={() => handleNavigation('/')}>
                    <ListItemText primary="Home" className="menu-item-text" />
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                </ListItem>
                <ListItem component="button" className='menu-item' onClick={() => handleNavigation('/about')}>
                    <ListItemText primary="About" className="menu-item-text" />
                    <ListItemIcon>
                        <InfoIcon />
                    </ListItemIcon>
                </ListItem>
                {isLoggedIn && (
                    <>
                        <ListItem component="button" className='menu-item' onClick={() => handleNavigation('/skilltrees/basic')}>
                            <ListItemText primary="Skill Trees" className="menu-item-text" />
                            <ListItemIcon>
                                <CategoryIcon />
                            </ListItemIcon>
                        </ListItem>
                        <ListItem component="button" className='menu-item' onClick={() => handleNavigation('/recipes')}>
                            <ListItemText primary="Recipes" className="menu-item-text" />
                            <ListItemIcon>
                                <MenuBookIcon />
                            </ListItemIcon>
                        </ListItem>
                    </>
                )}
            </List>
            <List>
                <Divider />
                <ListItem component="button" className='menu-item' onClick={handleToggleDarkMode} style={{ minHeight: '50px' }}>
                    <ListItemText primary={darkMode ? 'Light Mode' : 'Dark Mode'} className="menu-item-text" />
                    <ListItemIcon>
                        {darkMode ? <Brightness7Icon /> : <Brightness2Icon />}
                    </ListItemIcon>
                </ListItem>
                <ListItem component="button" className='menu-item' onClick={isLoggedIn ? logout : redirectToLogin} style={{ minHeight: '50px' }}>
                    <ListItemText primary={isLoggedIn ? 'Logout' : 'Login'} className="menu-item-text" />
                    <ListItemIcon>
                        {isLoggedIn ? <LogoutIcon /> : <LoginIcon />}
                    </ListItemIcon>
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Navigation;
