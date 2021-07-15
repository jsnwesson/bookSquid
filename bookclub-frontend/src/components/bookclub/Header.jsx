import React, { useState } from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button'
import ButtonBase from '@material-ui/core/ButtonBase'
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Login from '../sessions/Login.jsx';
import SignOut from '../sessions/SignOut.jsx';
import Logo from '../../pages/landingComponents/assets/bookSquid.svg';
import { searchByCategory } from '../../services/bookclubServices.js';
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
// import FormControl from '@material-ui/core/FormControl'
// import InputLabel from '@material-ui/core/InputLabel'
// import Squid from './assets/Squid-Logo.png';


const useStyles = makeStyles((theme) => ({
  grow: {
    position: 'absolute',
    flexGrow: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: 'inherit',
    fontSize: '16pt',
    width: '40vw'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      width: "20ch",
    },
  },
  dropdown: {
    width: '5vw',
  },
  profileIcon: {
    fontSize: '35px',
    margin: '20px',
    color: '#fee4ea'
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
  mainContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  searchItems: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButton: {
    height: '100%',
    backgroundColor: '#FEE4EA'
  },
  appBar: {
    backgroundColor: '#004D86'
  },
  loginSignOut: {
    // color: '#FEE4EA',
    // border: '2px solid red'
  },
  logo: {
    height: '10vh',
    margin: '15px 15px 15px 15px'
  }

}));

const Header = (props) => {
  const classes = useStyles();
  const [searchInput, setSearchInput] = useState();
  const [searchCategory, setSearchCategory] = useState("");

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
    console.log(searchInput);
  };
  // const handleCategorySelect = (e) => {
  //   setSearchCategory(e.target.value);


  // }
  const handleSearchSubmit = (e) => {
    if (searchInput) {
      searchByCategory(searchInput)
        .then((results) => {
          props.setSearchResults(results)
        })
    }
  }

  return (
    <div className={classes.grow}>
      <AppBar className={classes.appBar} >
        <Toolbar>

          <Grid container className={classes.mainContent}>

            <Grid item>
              <Link to='/'>
                <ButtonBase >
                  <Typography className={classes.title} variant="h6" noWrap>
                    <img alt='' src={Logo} className={classes.logo} />
                  </Typography>
                </ButtonBase>
              </Link>
            </Grid>


            <Grid item className={classes.searchItems}>
              {props.searchIsTrue
                ?
                null
                :
                <Grid container item >

                  <Grid item className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                    <InputBase
                      onChange={handleSearchInput}
                      placeholder="Search..."
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      inputProps={{ 'aria-label': 'search' }}
                    />
                    {/* <FormControl>
                      <InputLabel>Category</InputLabel>
                      <Select default="title" className={classes.dropdown} value='' variant="filled" label="Category" onChange={handleCategorySelect}>
                        <MenuItem disabled>Category</MenuItem>
                        <MenuItem value='title'>Title</MenuItem>
                        <MenuItem value='author'>Author</MenuItem>
                        <MenuItem value='genre'>Genre</MenuItem>
                      </Select>
                    </FormControl> */}
                  </Grid>
                  <Grid>
                    {searchInput
                      ? < Link to={'/search'}>
                        <Button className={classes.searchButton} variant="contained" onClick={handleSearchSubmit}>Search</Button>
                      </Link>
                      : <Button disabled className={classes.searchButton} variant="contained" onClick={handleSearchSubmit}>Search</Button>
                    }
                  </Grid>
                </Grid>
              }
            </Grid>

            <Grid>
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                {!props.isLoggedIn
                  ? <Login
                    className={classes.loginSignOut}
                    setIsLoggedIn={props.setIsLoggedIn}
                    setUidCookie={props.setUidCookie}
                    setEmailCookie={props.setEmailCookie} />

                  : <div>
                    <Grid className={classes.buttons} container item direction='row'>
                      <Grid item>
                        <Link to='/profile'>
                          <ButtonBase >
                            <AccountCircle className={classes.profileIcon} />
                          </ButtonBase>
                        </Link>
                      </Grid>

                      <Grid item>
                        <SignOut
                          className={classes.loginSignOut}
                          removeEmailCookie={props.removeEmailCookie}
                          removeUidCookie={props.removeUidCookie}
                          setIsLoggedIn={props.setIsLoggedIn}
                        />
                      </Grid>

                    </Grid>
                  </div>
                }
              </div>
            </Grid>

          </Grid>

        </Toolbar>
      </AppBar>
    </div >
  );
};

export default Header;
