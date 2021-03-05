import { Grid, makeStyles, Button } from "@material-ui/core";
import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { savePost } from "../../store/slices/BlogSlice";
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '5%'
  },
}));

function CreateBlog() {
  const classes = useStyles();
  const [value, setValue] = useState();

  const handleSubmit = (e) => {
    e.preventDefault()
    let newPost = {title :'title', description: value, image: 'image'};
    axios.post('http://localhost:4000/api/posts/add', newPost)
    .then(res => console.log(res))
    .catch(err=>console.log(err,'error'));
    window.location = '/posts';
  }
  
  return (
      <Grid container className={classes.container}>
        <Grid item md={2} xs={0}></Grid>
        <Grid item md={8} xs={12}>
          <Button size="small" variant="contained" color="black" onClick={handleSubmit}>
            Publish
          </Button>
          <ReactQuill theme="snow" value={value} onChange={setValue}/>
        </Grid>
        <Grid item md={2} xs={0}></Grid>

      </Grid>
  );
}

export default CreateBlog