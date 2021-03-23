import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
export default function Popup({msg, open, handleClose}) {
 
  return (
    <div>
      <Snackbar
       anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      style={{ marginTop: 50 }}
      open={open}
      autoHideDuration={8000}
      onClose={handleClose}
      >
      <MuiAlert onClose={handleClose} elevation={6} variant="filled" severity="error">
        {msg}
    </MuiAlert >
    </Snackbar>
    </div>
  );
}