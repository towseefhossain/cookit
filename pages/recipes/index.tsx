import { useState } from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { recipes } from '../../utils/sample-data';
import { TextField, List, ListItem, ListItemText, Card, CardContent, Typography, Container } from '@mui/material';

const RecipesPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredRecipes = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Layout title="Recipes | Next.js + TypeScript Example">
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
                <Card>
                    <CardContent>
                        <List>
                            {filteredRecipes.map((recipe) => (
                                <Link href={`/recipes/${recipe.id}`} passHref>
                                    <ListItem key={recipe.id} component="a">
                                        <ListItemText primary={recipe.name} />
                                    </ListItem>
                                </Link>
                            ))}
                        </List>
                    </CardContent>
                </Card>
            </Container>
        </Layout>
    );
};

export default RecipesPage;
