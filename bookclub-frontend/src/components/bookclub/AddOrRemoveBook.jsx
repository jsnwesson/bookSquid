import React, { useState } from 'react';
// import { addToReadBookList } from '../../services/bookclubServices';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooksIcon';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import { IconButton, MenuItem, Grid, FormHelperText, FormControl, Select, makeStyles } from '@material-ui/core';
// import MenuItem from '@material-ui/core/MenuItem';
// import Grid from '@material-ui/core/Grid';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import { makeStyles } from '@material-ui/core/styles';

const AddOrRemoveBook = (props) => {
  let clicked;
  const [listName, setListName] = useState('')

  /*
  QUESTIONS FOR LATER if it is rendered in a list... then.. could we pass it props for the current list and bookId
  (this would eliminate the need for a selection menu) --exept for when it is rendered within the search page. or on a book page...

  INSTRUCTIONS FOR PROPS FOR EACH PAGE
    - SEARCH PAGE [bookId, functionality={'remove'}]
    - BOOK PAGE [bookId, functionality={'both'}]
    - LANDING PAGE [bookId, functionality={'both'}]
    - PROFILE PAGE [bookId, functionality={'both'}]




  if props.add === false then FUNCTIONALITY=delete
  if props.add === true then FUNCTIONALITY=add

  bookId --- props.bookId
  name of list --- props.listName
  */
  const useStyles = makeStyles((theme) => ({
    formControl: {
      // margin: theme.spacing(1),
      // minWidth: 120,
    },
    selectEmpty: {
      // marginTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();

  const handleSubmit = (option) => {
    clicked = true;
    if (clicked === true && option === 1) {
      // add to a selected list
      alert(`these are your selections...${props.bookId} and ${listName}`)
    } else if (clicked === true && option === 2) {
      // remove from selected list
      alert(`these are your selections...${props.bookId} and ${listName}`)
    } else if (clicked === false && option === 1) {
      alert('you have not selected a list to add to')
    } else if (clicked === false && option === 2) {
      alert('you have not selected a list to add to delete from')
    }


  };
  const handleChange = (event) => {
    setListName(event.target.value)
  }
  return (
    <Grid container item direction='row'>

      <FormControl className={classes.formControl}>
        <Select
          value={listName}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="" disabled>
            Lists:
          </MenuItem>
          <MenuItem value={'list1'}>list1</MenuItem>
          <MenuItem value={'list2'}>list2</MenuItem>
          <MenuItem value={'list3'}>list3</MenuItem>
          <MenuItem value={'list4'}>list4</MenuItem>
        </Select>
        <FormHelperText>Select a list</FormHelperText>
      </FormControl>

      {props.functionality === 'both' ?
        <Grid container item direction="row" >
          <IconButton aria-label="add button" onClick={() => {
            handleSubmit(1)
          }}>
            <LibraryBooksIcon type="submit" />
          </IconButton>

          <IconButton aria-label="delete button" onClick={() => {
            handleSubmit(2)
          }}>
            <DeleteForeverTwoToneIcon type="submit" />
          </IconButton>
        </Grid>
        :
        <IconButton aria-label="delete button" onClick={() => {
          handleSubmit(2)
        }}>
          <DeleteForeverTwoToneIcon type="submit" />
        </IconButton>
      }

    </Grid>
  )
};

export default AddOrRemoveBook;