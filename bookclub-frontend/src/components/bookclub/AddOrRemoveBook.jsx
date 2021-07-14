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
  const [changed, setChanged] = useState(false)
  const [listName, setListName] = useState()

  /*
  if props.add === false then FUNCTIONALITY=delete
  if props.add === true then FUNCTIONALITY=add
  <AddOrRemoveBook bookId={book.bookId} whatList={selectData.title} functionality={'remove'}>
  bookId --- props.bookId
  */
  const useStyles = makeStyles((theme) => ({
    formControl: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',


    },
    remove: {
      display: 'flex',
      justifyContent: 'center',
    },
  }));
  const classes = useStyles();

  const handleSubmit = (option) => {
    if (option === 3) {
      setListName(props.listName)
      alert(`these are your selections... you will be removing book: ${props.bookId} from: ${props.listName} `)
    }
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
    if (listName === undefined) {
      setChanged(false)
    } else {
      setChanged(true)
    }

  }, [listName])
  return (
    <Grid container item direction='row' className={classes.formControl}>

      {props.functionality === 'remove' ? null :
        <FormControl >
          <Select
            value={listName}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="" disabled>
              Lists:
            </MenuItem>
            <MenuItem value={'Favorite'}>Favorite</MenuItem>
            <MenuItem value={'Currently Reading'}>Currently Reading</MenuItem>
            <MenuItem value={'Previously Read'}>Previously Read</MenuItem>
            <MenuItem value={'Want To Read'}>Want To Read</MenuItem>
          </Select>
          <FormHelperText>Select a list</FormHelperText>
        </FormControl>
      }

      {/* <Grid container item direction="row" > */}
      {props.functionality === 'remove' ?
        <Grid container item direction='row' className={classes.remove}>
          <IconButton aria-label="delete button" onClick={() => {
            handleSubmit(3)
          }}>
            <DeleteForeverTwoToneIcon type="submit" />
          </IconButton>
        </Grid>
        :
        <IconButton aria-label="add button" onClick={() => {
          handleSubmit(1)
        }}>
          <LibraryBooksIcon type="submit" />
        </IconButton>
      }
      {props.functionality === 'both' ?
        <IconButton aria-label="delete button" onClick={() => {
          handleSubmit(2)
        }}>
          <DeleteForeverTwoToneIcon type="submit" />
        </IconButton>
        : null}
      {/* </Grid> */}

    </Grid>
  )
};

export default AddOrRemoveBook;