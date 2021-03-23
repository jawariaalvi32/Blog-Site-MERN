import { Grid, makeStyles, Button } from "@material-ui/core";
import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { savePost } from "../../store/slices/BlogSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import {useHistory} from "react-router-dom";
import Popup from "../Popup";
import Login from '../user/Login'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '5%'
  },
  btn: {
    float: 'right',
    margin : '5px 15px',
    padding: 5
  }
}));

function CreateBlog() {
  const classes = useStyles();
  let history = useHistory();

  const [value, setValue] = useState();
  const [err, setErr] = React.useState('');
  const [open, setOpen] = React.useState(false)

  const user = useSelector( state => state.user );
  const isSignedIn = (user.name) ? true : false;

  const handleSubmit = (e) => {
    e.preventDefault()
    const st =  value.search('<h1>')
    const end = value.search('</h1>');

    let newPost = {title : value.slice(st + 4, end), description: value.slice(end), image: 'image'};
    console.log(newPost)
    axios.post('http://localhost:4000/api/posts/add', newPost)
    .then(res => console.log(res))
    .catch(err=> {
      setErr(err)
      setOpen(true)
    });
    history.push("/posts")
  }
  
  return (
    <div>
    {
     isSignedIn ?
      <Grid container className={classes.container}>
        <Popup msg={err} open={open} handleClose={() => setOpen(false)}/>
        <Grid item md={2} xs={0}></Grid>
        <Grid item md={8} xs={12}>
          <Button size="small" variant="contained" color="black" onClick={handleSubmit} className={classes.btn}>
            Publish
          </Button>
          <br/>
          <br/>
          <ReactQuill theme="snow" value={value} onChange={setValue}/>
        </Grid>
        <Grid item md={2} xs={0}></Grid>
      </Grid>:
      <Login/>
    }   
    </div>
  
  );
}

export default CreateBlog