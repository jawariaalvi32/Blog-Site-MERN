import { Grid } from '@material-ui/core'
import React from 'react'

const SingleBlog = () => {
    return (
        <Grid container>
        <Grid item lg={3} md={3} sm={1}></Grid>
        <Grid item lg={6} md={6} sm={10}>
            <Card className={classes.root} >
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {item.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {item.description}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                {/* // <CardActions>
                //     <Button size="small" color="primary">
                //     Share
                //     </Button>
                //     <Button size="small" color="primary">
                //     Learn More
                //     </Button>
                // </CardActions> */}
            </Card>
        </Grid>
        <Grid item lg={3} md={3} sm={1}></Grid>

    </Grid>
    )
}

export default SingleBlog
