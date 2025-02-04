import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { recipes, steps } from '../../utils/sample-data';
import Layout from '../../components/Layout';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const RecipePage = () => {
    const router = useRouter();
    const { recipeId } = router.query;
    const [recipe, setRecipe] = useState(null);
    const [open, setOpen] = useState(false);
    const [selectedTip, setSelectedTip] = useState('');

    useEffect(() => {
        if (recipeId) {
            const foundRecipe = recipes.find((r) => r.id === recipeId);
            setRecipe(foundRecipe);
        }
    }, [recipeId]);

    const getStepDetails = (stepId) => {
        return steps.find((s) => s.id === stepId);
    };

    const handleClickOpen = (tip) => {
        setSelectedTip(tip);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedTip('');
    };

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <Layout title={recipe.name}>
            <Card className="card" style={{ maxWidth: 800, margin: '20px auto' }}>
                <CardContent>
                    <Typography variant="h4" component="h1" gutterBottom>
                        {recipe.name}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        {recipe.description}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <strong>Cooking Time:</strong> {recipe.cookingTime}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <strong>Servings:</strong> {recipe.servings}
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Ingredients:
                    </Typography>
                    <List>
                        {recipe.ingredients.map((ingredient, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={ingredient} />
                            </ListItem>
                        ))}
                    </List>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Steps:
                    </Typography>
                    <List>
                        {recipe.steps.map((stepId, index) => {
                            const step = getStepDetails(stepId);
                            return (
                                <Card className="card" key={index} style={{ marginBottom: '10px' }}>
                                    <CardContent>
                                        <ListItem>
                                            <ListItemText primary={step.description} />
                                            <IconButton onClick={() => handleClickOpen(step.tips)}>
                                                <InfoIcon />
                                            </IconButton>
                                        </ListItem>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </List>
                </CardContent>
            </Card>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Tip</DialogTitle>
                <DialogContent>
                    <DialogContentText>{selectedTip}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Layout>
    );
};

export default RecipePage;
