import { useRouter } from 'next/router';
import { Typography, Container, Box, Grid, Card, CardContent } from '@mui/material';

const IndexPage = () => {
  const router = useRouter();

  const handleCardClick = (path) => {
    router.push(path);
  };

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to CookIt!
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Your ultimate cooking companion.
        </Typography>
        <Typography variant="body1" paragraph>
          CookIt is an app designed to help you discover, organize, and perfect your cooking skills. Whether you're a beginner or a seasoned chef, CookIt has something for everyone.
        </Typography>
        <Typography variant="h6" component="h3" gutterBottom>
          Features:
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Card className="card" onClick={() => handleCardClick('/recipes')} style={{ cursor: 'pointer' }}>
              <CardContent>
                <Typography variant="h6" component="h4">
                  Discover Recipes
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Explore a wide variety of recipes from different cuisines and dietary preferences.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default IndexPage;
