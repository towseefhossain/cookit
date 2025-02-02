import Layout from "../components/Layout";
import { Typography, Container, Box, Grid, Card, CardContent } from '@mui/material';

const AboutPage = () => (
  <Layout title="About | CookIt">
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h2" component="h1" gutterBottom>
          About CookIt
        </Typography>
        <Typography variant="body1" paragraph>
          CookIt is your ultimate cooking companion, designed to help you discover, organize, and perfect your cooking skills. Whether you're a beginner or a seasoned chef, CookIt has something for everyone.
        </Typography>
        <Typography variant="h6" component="h3" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to make cooking accessible and enjoyable for everyone. We believe that cooking should be a fun and rewarding experience, and we're here to provide you with the tools and resources you need to succeed in the kitchen.
        </Typography>
        <Typography variant="h6" component="h3" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Card>
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
            <Card>
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
            Coming Soon
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="h4">
                    Meal Planning
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Plan your meals for the week and generate shopping lists automatically.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="h4">
                    Community Features
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Share your recipes and cooking tips with the CookIt community.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  </Layout>
);

export default AboutPage;
