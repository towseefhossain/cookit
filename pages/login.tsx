import { useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Box, TextField, Button, Typography } from '@mui/material';
import { useAuth } from '../context/authContext';

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter();
    const { login } = useAuth();

    const handleLogin = () => {
        // Implement your login logic here
        // For now, we'll just set isLoggedIn to true and redirect to the homepage
        login();
        router.push('/');
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 8 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Login
                </Typography>
                <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                    onClick={handleLogin}
                >
                    Login
                </Button>
            </Box>
        </Container>
    );
};

export default Login;
