import React, { useState, useEffect } from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button'
import ButtonBase from '@material-ui/core/ButtonBase'
import { Link } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Login from '../sessions/Login.jsx';
import SignOut from '../sessions/SignOut.jsx';
// import Squid from './assets/Squid-Logo.png';
import Logo from '../../pages/landingComponents/assets/bookSquid.svg';
// import searchByCategory from '../../services/bookclubServices.js'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    fontSize: '16pt'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  dropdown: {
    width: '5vw',

  },
  profileIcon: {
    height: '10hv',
    margin: '10px',
    padding: '10px'
  }
}));


const Header = (props) => {

  const classes = useStyles();
  const [searchInput, setSearchInput] = useState('')
  const [searchCategory, setSearchCategory] = useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);


  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
    console.log(searchInput)
  }
  const handleCategorySelect = (e) => {
    setSearchCategory(e.target.value);
    console.log(searchCategory)
  }
  const handleSearchSubmit = () => {
    // searchByCategory(searchCategory, searchInput)
    /////////////////////////////////////////////////////////////
  }


  useEffect(() => {
    console.log(searchCategory)
  }, [searchCategory])


  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <MenuItem>Profile</MenuItem>
    </Menu>
  );



  return (
    <div className={classes.grow}>
      <AppBar position="sticky">
        <Toolbar>
          <Link to='/'>
            <ButtonBase >


              <Typography className={classes.title} variant="h6" noWrap>
                <img alt='' src={Logo} className="logo" />
              </Typography>
            </ButtonBase>
          </Link>
          <div className={classes.search}>
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
            <FormControl>
              <InputLabel>Category</InputLabel>
              <Select default="title" className={classes.dropdown} value='' variant="filled" label="Category" onChange={handleCategorySelect}>
                <MenuItem disabled>Category</MenuItem>
                <MenuItem value="title">Title</MenuItem>
                <MenuItem value='author'>Author</MenuItem>
                <MenuItem value='genre'>Genre</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Button variant="contained" onclick={handleSearchSubmit}>Search</Button>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {!props.isLoggedIn
              ? <IconButton>
                <Login
                  setIsLoggedIn={props.setIsLoggedIn}
                  setUidCookie={props.setUidCookie}
                  setEmailCookie={props.setEmailCookie} />
              </IconButton>
              : <div>
                <Link to='/profile'>
                  <ButtonBase className={classes.profileIcon}>
                    <AccountCircle size={'large'} />
                  </ButtonBase>
                </Link>
                <SignOut
                  removeEmailCookie={props.removeEmailCookie}
                  removeUidCookie={props.removeUidCookie}
                  setIsLoggedIn={props.setIsLoggedIn}
                />
              </div>

            }
          </div>
        </Toolbar>
      </AppBar>

      {renderMenu}
    </div>
  );








  // {/* <Navbar className="navBar" variant="light" expand="lg" sticky="top">
  //   <Container>
  //     <Row>
  //       <Col xs={7}>
  //         <Navbar.Brand href="#home"><img alt='' src={Logo} className="logo"/></Navbar.Brand>
  //       </Col>
  //       <Col>



  //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //   <Navbar.Collapse id="basic-navbar-nav">

  //     <Form inline>
  //       <Row>
  //         <Col>
  //           <FormControl type="text" placeholder="Search Books, Authors or Genres" className=" mr-sm-2" onChange={handleSearchInput}/>
  //         </Col>

  //         {/* <Col>
  //           <NavDropdown variant="secondary" title="Category" id="basic-nav-dropdown" onChange={handleCategorySelect}>
  //             <NavDropdown.Item value='title'>Title</NavDropdown.Item>
  //             <NavDropdown.Item value='author'>Author</NavDropdown.Item>
  //             <NavDropdown.Item value='genre'>Genre</NavDropdown.Item>
  //           </NavDropdown>
  //         </Col> *

  //       </Row>
  //     </Form>
  //     <Col>
  //       <Dropdown onSelect={handleCategorySelect}>
  //       <Dropdown.Toggle variant="success" id="dropdown-basic">
  //     Dropdown Button
  //       </Dropdown.Toggle>

  //         <Dropdown.Item>Title</Dropdown.Item>
  //         <Dropdown.Item value="author">Author</Dropdown.Item>
  //         <Dropdown.Item value="genre">Genre</Dropdown.Item>
  //       </Dropdown>
  //     </Col>

  //     <Col>
  //           {searchCategory
  //             ? <Button variant="outline-success" onClick={handleSearchSubmit}>Search</Button>
  //             : <Button disabled variant="outline-success">Search</Button>
  //           }
  //         </Col>

  //     {!props.isLoggedIn
  //         ? <Login setIsLoggedIn={props.setIsLoggedIn} setUidCookie={props.setUidCookie} setEmailCookie={props.setEmailCookie} />
  //         : <Container >
  //             <Row>
  //               {/* <Col>
  //                 <div>avatar</div>
  //               </Col> *
  //               <Col>
  //                 <SignOut
  //                   removeEmailCookie={props.removeEmailCookie}
  //                   removeUidCookie={props.removeUidCookie}
  //                   setIsLoggedIn={props.setIsLoggedIn}
  //                 />
  //               </Col>
  //             </Row>
  //           </Container>
  //         }


  //         </Navbar.Collapse>
  //       </Col>
  //     </Row>
  //   </Container>
  // </Navbar> */}

}

export default Header;
