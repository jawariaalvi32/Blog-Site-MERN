import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { fetchBlogs } from '../../store/slices/BlogSlice'

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

  const state = useSelector(state => state.post.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBlogs())
  }, [])
  console.log(state)

  return (
      <Grid container>
          <Grid item lg={3} md={3} sm={1}></Grid>
          <Grid item lg={6} md={6} sm={10}>
                {
                    (state == 'undefined' || state == '' || state == null || state.title) ?
                    <h1>LOad</h1> :
                    state.map(
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
                                        {/* <Typography variant="body2" color="textSecondary" component="p" dangerouslySetInnerHTML={{__html: item.description}}>
                                        </Typography> */}
                                        </CardContent>
                                        </CardActionArea>
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