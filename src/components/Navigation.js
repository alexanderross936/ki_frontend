import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import Router from '../Router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';

// import LoggedIn from './LoggedIn';
// Import { Link } here //

const Navigation = ({ auth: { isAuthenticated, loading }, logout }) => {




        
    const authLinks = (<Fragment>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Kitchen Inventory</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/Home">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/sum">Ingredients List</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/recipes_list">Recipes List</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/add_recipe">Add Recipe</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/add_ingredients">Add Ingredients</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick={logout}>Logout</a>
      </li>
    </ul></div> </nav>  </Fragment>)

        {/* // <Fragment>
        //     <ButtonGroup>
        //         <MenuItem>
        //     <Link to="/sum" style= {{ textDecoration: 'none' }}><Button color="white">Ingredients List</Button></Link>
        //         </MenuItem>
        //         <MenuItem>
        //     <Link to="/recipes_list" style= {{ textDecoration: 'none' }}><Button color="white">Recipes List</Button></Link>
        //         </MenuItem>
        //         </ButtonGroup>
        //         <MenuItem>
        //     <Link to="/add_recipe" style= {{ textDecoration: 'none' }}><Button color="white">Add Recipe</Button></Link>
        //         </MenuItem>
        //         <MenuItem>
        //     <Link to="/add_ingredients" style= {{ textDecoration: 'none' }}><Button color="white">Add Ingredients</Button></Link>
        //         </MenuItem>
        //         <MenuItem>
        //     <a onClick={logout} href='#!'>
        //         <span className="hide-sm" style= {{ textDecoration: 'none' }}><Button color="white">Logout</Button></span></a>
        //         </MenuItem>
        //         </Fragment> */}

        const guestLinks = (<Fragment>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
        <li className="nav-item">
        <a className="nav-link" href="/login">Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/register">Register</a>
      </li>
    </ul>    </div> </nav> 
        </Fragment>
        )

        return (
            
                       !loading && (<Fragment>

                           {isAuthenticated ? authLinks : guestLinks}
                           </Fragment>)
            
        )
    
        
                       }

// Navigation.propTypes = {
//     logout: PropTypes.func.isRequired,
//     auth: PropTypes.func.isRequired
// }

const mapStateToProps = state => ({
    auth: state.auth

})

export default connect(mapStateToProps, {logout})(Navigation);