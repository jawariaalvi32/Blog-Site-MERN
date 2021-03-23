import React, { useState, useEffect } from 'react'
import MaterialTable, {MTableCell} from 'material-table'
import AddIcon from '@material-ui/icons/Add';
import {useHistory} from "react-router-dom";
import axios from 'axios';
import { fetchBlogs } from '../store/slices/BlogSlice'
import { useSelector, useDispatch } from 'react-redux'
import Popup from './Popup';
import Login from './user/Login';

export default function Editable() {

    let history = useHistory();
    const state = useSelector(state => state.post.data)
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false)
    const [err, setErr] = React.useState('');

    const user = useSelector( state => state.user );
    const isSignedIn = (user.name) ? true : false;

    const [columns, setColumns] = useState([
      { title: 'Title', field: 'title' }
    ]);
    const [data, setData] = useState([]);
    useEffect(() => {
        dispatch(fetchBlogs())
            setData(state.map( o => ({ ...o })))
        }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:4000/api/posts/${data[id]._id}`)
        .then(
            (res) => {
              console.log('Post was deleted successfully', res);
            })
          .catch((err) => {
              setErr(err);
              setOpen(true);
          });
    }

    return (
        <div>
            {
                isSignedIn ? 
                <div style={{ maxWidth: '90%', margin : 'auto', marginTop: '3%' }}>
                  <Popup msg={err} open={open} handleClose={() => setOpen(false)}/>
                    <MaterialTable
                        title = "Dummy Data"
                        columns = {columns}
                        data = {data}
                        actions={[
                            {
                                icon: AddIcon,
                                tooltip: 'Add',
                                isFreeAction: true,
                                onClick: () => history.push("/create"),
                            },
                        ]}
                        options={{
                        actionsColumnIndex: -1
                        }}
                        editable={{
                            // onRowUpdate: (newData, oldData) =>
                            //     new Promise((resolve, reject) => {
                            //         setTimeout(() => {
                            //             const dataUpdate = [...data];
                            //             const index = oldData.tableData.id;
                            //             dataUpdate[index] = newData;
                            //             setData([...dataUpdate]);
                            //             resolve();
                            //         }, 1000);
                            //     }),
                            onRowDelete: oldData =>
                                new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                        const dataDelete = [...data];
                                        const index = oldData.tableData.id;
                                        dataDelete.splice(index, 1);
                                        setData([...dataDelete]);
                                        handleDelete(oldData.tableData.id)
                                        resolve();
                                    }, 1000);
                                }),
                        }}
                    />
            </div>:
            <Login/>
            }
        </div>
    )
  }
  