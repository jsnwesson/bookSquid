import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';

const AddOrRemoveBook = (props) => {
  const [changed, setChanged] = useState('')
  const [listName, setListName] = useState('')

  /*
  if props.add === false then FUNCTIONALITY=delete
  if props.add === true then FUNCTIONALITY=add

  bookId --- props.bookId
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

    if (changed === true && option === 1) {
      // add to a selected list
      alert(`these are your selections... you will be adding book: ${props.bookId} to: ${listName} `)
    } else if (changed === true && option === 2) {
      // remove from selected list
      alert(`these are your selections... you will be removing book: ${props.bookId} from: ${listName} `)
    } else if (changed === false && option === 1) {
      alert('you have not selected a list to add to')
    } else if (changed === false && option === 2) {
      alert('you have not selected a list to add to delete from')
    }
  };

  const handleChange = (event) => {
    setListName(event.target.value)
  }
  useEffect(() => {
    setChanged(true)
  }, [listName])
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

    </Grid>
  )
};

export default AddOrRemoveBook;