import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { postBookReview } from '../../services/bookclubServices.js';

// import FormControlLabel from '@material-ui/core/FormControlLabel';
import Rating from '@material-ui/lab/Rating';
// import axios from 'axios';
// import access from '../../../../config.js';

//ratings
const labels = {
  1: 'Poor+',
  2: 'Fair',
  3: 'Average',
  4: 'Good',
  5: 'Great',
};

//rating styles
const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    display: 'flex',
    alignItems: 'center',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '150ch',
    },
  },
  summary: {
    paddingTop: '30px',
  },
  body: {
    paddingTop: '30px',
  },
  recommend: {
    paddingTop: '30px',
  },
  MoreReviewBtn: {
    padding: '0px 10px 0px 0px'
  }
}));

const AddReviewBtn = ({id}) => {
  const classes = useStyles();
    // form submission
    const [hover, setHover] = useState(-1);
    // rating state
    const [value, setValue] = useState(null);
    const [summary, setSummary] = useState('');
    const [body, setBody] = useState('');


  // modal stae
  const [open, setOpen] = useState(false);
  //modal
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const handleSubmit = () => {
    if (!value) {
      alert("Please leave a rating")
    } else if (!body) {
      alert("Please leave a review")
    } else if(!summary) {
      alert("Please enter a review summary")
    } else {
      postBookReview(body, summary, value, id)
      .then(data => {
        console.log(data)
        handleClose();
        alert("Your review has been added!")
      })
      .catch(err => {
        console.log(err)
        alert("Sorry please try again.")
      });
    }
  };


  return (
    <span>
      <Button variant="outlined" onClick={handleClickOpen}>ADD A REVIEW +</Button>
      <Dialog 
      open={open} 
      onClose={handleClose} 
      aria-labelledby="form-dialog-title"
      fullWidth={true}
      >
        <DialogTitle id="form-dialog-title">Please leave your review</DialogTitle>
        <DialogContent>
          <DialogContentText>
            How do you rate this product?
          </DialogContentText>
           <div className={classes.root}>
            <Rating
              name="hover-feedback"
              value={value}
              precision={1}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
            />
              {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
            </div>
            <div className={classes.summary}>
                <TextField
                autoFocus
                margin="dense"
                id="summary"
                label="Enter a Review Summary"
                value={summary}
                onChange={e => setSummary(e.target.value)}
                type="text"
                fullWidth
                variant="standard"
              />
            </div>
            <div className={classes.body}>
              <TextField
                id="outlined-multiline-static"
                label="Your Review"
                fullWidth={true}
                value={body}
                onChange={e => setBody(e.target.value)}
                multiline
                rows={4}
                variant="outlined"
              />
            </div>
          <Box pt={1}>
          <input
            accept="image/*"
            className={classes.input}
            style={{ display: 'none' }}
            id="raised-button-file"
            multiple
            type="file"
          />
      
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
           <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </span>
  )
};

export default AddReviewBtn;