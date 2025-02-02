import { useRouter } from 'next/router';
import Layout from "../components/Layout";
import { Typography, Container, Box, Button, Grid, Card, CardContent } from '@mui/material';

const IndexPage = () => {
  const router = useRouter();

  const handleCardClick = (path) => {
    router.push(path);
  };

  return (
    <Layout title="Home | CookIt">
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
              <Card onClick={() => handleCardClick('/recipes')} style={{ cursor: 'pointer' }}>
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
            <Grid item xs={12} sm={6}>
              <Card onClick={() => handleCardClick('/skilltrees/basic')} style={{ cursor: 'pointer' }}>
                <CardContent>
                  <Typography variant="h6" component="h4">
                    Skill Trees
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Learn new cooking techniques and improve your skills with our interactive skill trees.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Box mt={4}>
            <Typography variant="h6" component="h3" gutterBottom>
              Get Started:
            </Typography>
            <Button variant="contained" color="primary" onClick={() => handleCardClick('/recipes')}>
              Explore Recipes
            </Button>
            <Button variant="contained" color="secondary" onClick={() => handleCardClick('/skilltrees/basic')} style={{ marginLeft: '10px' }}>
              Learn Skills
            </Button>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default IndexPage;
