import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    margin: '2%'
  },
  media: {
    height: 140,
  },
});

export default function BlogCard() {
  const classes = useStyles();
  const [err, setErr] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/api/posts/')
    .then(
        (item) => {
            setPosts(item.data.data);
        })
    .catch((e) => 
        setErr(e)
    )
  }, [])

  return (
      <Grid container>
          <Grid item lg={3} md={3} sm={1}></Grid>
          <Grid item lg={6} md={6} sm={10}>
                {
                    posts.map(
                        (item) => {
                            return(
                                <Link to={`/posts/${item._id}`}>
                                    <Card key={ item._id } className={classes.root}>
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
                                </Link>
                            )
                        }
                    )
                }
          </Grid>
          <Grid item lg={3} md={3} sm={1}></Grid>
      </Grid>
  );
}