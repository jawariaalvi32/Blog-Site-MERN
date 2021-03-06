import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import axios from 'axios'
import { fetchSingleBlog } from '../../store/slices/BlogSlice'
import { useSelector, useDispatch } from 'react-redux'

const useStyles = makeStyles({
    root: {
      maxWidth: '100%',
      margin: '2%'
    },
    media: {
      height: 140,
    },
  });


const SingleBlog = () => {
    const classes = useStyles();
    const [err, setErr] = useState('')
    const [posts, setPosts] = useState([])
    const state = useSelector(state => state.post.data)
    const dispatch = useDispatch()
  
    useEffect(() => {
        dispatch(fetchSingleBlog(window.location.pathname))
    }, [])

    return (
        <Grid container>
        <Grid item lg={3} md={3} sm={1}></Grid>
        <Grid item lg={6} md={6} sm={10}>
            {
                (!err) && (state != '') ? 
                <Card className={classes.root} >
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {state.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" dangerouslySetInnerHTML={{__html: state.description}}>
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card> 
                :
                <p>Loading</p>
            }
        </Grid>
        <Grid item lg={3} md={3} sm={1}></Grid>

    </Grid>
    )
}

export default SingleBlog
