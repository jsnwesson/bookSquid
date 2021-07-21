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
import Logo from '../../pages/landingComponents/assets/BookSquidLogo_Main.svg';
import bigLogo from '../../pages/landingComponents/assets/BookSquidLogo_No_Tag.svg'

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
    color: '#004D86',
    zIndex: '1000'
  },
  inputRoot: {
    color: '#004D86',
    backgroundColor: '#fffcfd',
    fontSize: '16pt',
    width: '40vw',
    border: "1.1px solid #004D86",
    borderRadius: '7px'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    // [theme.breakpoints.up("xs")]: {
    //   width: "38vw",
    // },
  },
  dropdown: {
    width: '5vw',
  },
  profileIcon: {
    fontSize: '35px',
    margin: '20px',
    color: '#004D86'
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
    color: '#FEE4EA',
    backgroundColor: "#004D86"
  },
  appBar: {
    backgroundColor: '#FEE4EA'
  },
  loginSignOut: {

  },
  logo: {
    height: '6vh',
    margin: '1.75vh'
  },
  bigLogo: {
    height: '6vh',
    margin: '1.75vh 1.75vh 1.75vh 15vh'
  }

}));

const Header = (props) => {
  const submitButton = document.getElementById('submitButton')
  const classes = useStyles();
  const [searchInput, setSearchInput] = useState();

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };


  const handleEnterSearch = (e) => {
    if (e.key === 'Enter') {
      submitButton.click();
    }
  }


  return (
    <div className={classes.grow}>
      <AppBar className={classes.appBar} >
        <Toolbar>
          <Grid container className={classes.mainContent}>

            {/* Logo */}
            {props.isLandingPage
              ? <Grid item ></Grid>

              : <Grid item>
                <Link to='/'>
                  <ButtonBase >
                    <Typography className={classes.title} variant="h6" noWrap>
                      <img alt='' src={Logo} className={classes.logo} />
                    </Typography>
                  </ButtonBase>
                </Link>
              </Grid>
            }

            {/* Search Bar */}
            <Grid item className={classes.searchItems}>
              {props.isLandingPage
                ?
                <Grid><img className={classes.bigLogo} alt='squid logo' src={bigLogo} /></Grid>
                :
                <Grid container item >

                  <Grid item className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                    <InputBase
                      onChange={handleSearchInput}
                      onKeyUp={handleEnterSearch}
                      placeholder="Search Books, Authors and Genres!"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  </Grid>
                  <Grid>
                    {/* // {searchInput
                    //   ? < Link to={'/search'}>
                    //     <Button
                    //       id="submitButton"
                    //       className={classes.searchButton}
                    //       variant="contained"
                    //       onClick={handleSearchSubmit}
                    //     >Search</Button> */}
                    {searchInput ?
                      <Link to={`/search/${searchInput}`}>
                        <Button
                          id='submitButton'
                          className={classes.searchButton}
                          variant="contained"

                        >
                          Search
                        </Button>
                      </Link>
                      : <Button
                        disabled className={classes.searchButton}
                        variant="contained"
                      // onClick={handleSearchSubmit}
                      >
                        Search
                      </Button>
                    }
                  </Grid>
                </Grid>
              }
            </Grid>

            {/* Login/SignOut Profile Button */}
            <Grid>
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                {/* Login */}
                {!props.isLoggedIn
                  ? <Login
                    className={classes.loginSignOut}
                    setIsLoggedIn={props.setIsLoggedIn}
                    setUidCookie={props.setUidCookie}
                    setEmailCookie={props.setEmailCookie}
                  />

                  : <div>
                    <Grid className={classes.buttons} container item direction='row'>
                      <Grid item>
                        <Link to='/profile'>
                          <ButtonBase >
                            <AccountCircle className={classes.profileIcon} />
                          </ButtonBase>
                        </Link>
                      </Grid>

                      {/* Signout */}
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
