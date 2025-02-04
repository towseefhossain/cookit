import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { recipes } from '../../utils/sample-data';
import { TextField, Grid, Card, CardContent, CardMedia, Typography, Container } from '@mui/material';

const RecipesPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCardClick = (id) => {
        router.push(`/recipes/${id}`);
    };

    const filteredRecipes = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
            <Container maxWidth="md">
                <Typography variant="h3" component="h1" gutterBottom>
                    Recipes
                </Typography>
                <TextField
                    label="Search Recipes"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <Grid container spacing={3}>
                    {filteredRecipes.map((recipe) => (
                        <Grid item xs={12} sm={6} md={4} key={recipe.id}>
                            <Card
                                onClick={() => handleCardClick(recipe.id)}
                                className="card"
                            >
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://imgur.com/CUG0Aof.jpeg" // Imgur placeholder image URL
                                    alt={recipe.name}
                                />
                                <CardContent>
                                    <Typography variant="h6" component="h4">
                                        {recipe.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {recipe.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
    );
};

export default RecipesPage;
