import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { addToList } from '../../services/bookclubServices';
import { removeFromList } from '../../services/bookclubServices';

const AddOrRemoveBook = (props) => {
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
    icon: {
      position: 'absolute',
      top: '1%',
      right: '1%',
      color: 'red',
      backgroundColor: '#FEE4EA',
      padding: '0px',
      '&:hover': { backgroundColor: '#FEE4EA' },
    },
  }));
  const classes = useStyles();

  const handleSubmit = (option) => {
    if (option === 'delete X button') {
      // setListName(props.listName)
      // removeFromList(props.listName, props.bookId)
      // alert(`these are your selections... you will be removing book: ${props.bookId} from: ${props.listName} `)
    } else if (option === 'add') {
      // add to a selected list
      addToList(listName, props.bookId)
      // alert(`these are your selections... you will be adding book: ${props.bookId} to: ${listName} `)
    } else if (option === 'remove from selected list') {
      // remove from selected list
      // removeFromList(listName, props.bookId)
      alert(`these are your selections... you will be removing book: ${props.bookId} from: ${listName} `)
    }
  };

  const handleChange = (event) => {
    setListName(event.target.value)
  }
  // useEffect(() => {
  //   if (listName === undefined) {
  //     setChanged(false)
  //   } else {
  //     setChanged(true)
  //   }

  // }, [listName])
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
            <MenuItem value={'favorite'}>Favorite</MenuItem>
            <MenuItem value={'currentlyReading'}>Currently Reading</MenuItem>
            <MenuItem value={'alreadyRead'}>Previously Read</MenuItem>
            <MenuItem value={'goingToRead'}>Want To Read</MenuItem>
          </Select>
          <FormHelperText>Select a list</FormHelperText>
        </FormControl>
      }

      {/* <Grid container item direction="row" > */}
      {props.functionality === 'remove' ?
        <IconButton className={classes.icon} aria-label="delete button" onClick={() => {
          handleSubmit('delete X button')
        }}>
          <HighlightOffIcon type="submit" />
        </IconButton>
        :
        <IconButton aria-label="add button" disabled={listName ? false : true} onClick={() => {
          handleSubmit('add')
        }}>
          <PlaylistAddIcon type="submit" />
        </IconButton>
      }
      {props.functionality === 'both' ?
        <IconButton aria-label="delete button" disabled={listName ? false : true} onClick={() => {
          handleSubmit('remove from selected list')
        }}>
          <DeleteOutlineIcon type="submit" />
        </IconButton>
        : null}
      {/* </Grid> */}

    </Grid>
  )
};

export default AddOrRemoveBook;