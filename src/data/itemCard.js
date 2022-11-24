import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ItemCard = (props) => {
    return (
        <Card sx={{ width: 250, margin: 1 }}>
        <CardMedia
            component="img"
            height="250"
            image={props.image}
            alt={props.fullName}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {props.fullName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                <p>{props.firstName + ' ' +props.lastName+' belongs to '+ props.family + "'s family"}</p>
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Details</Button>
            <Button size="small">Learn More</Button>
        </CardActions>
        </Card>
    );
}

export default ItemCard