// import React, { useState, formData, setFormData } from 'react';
// import axios from 'axios';
// import { Link, Redirect} from 'react-router';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types'
// import { PromiseProvider } from 'mongoose';
// import { setAlert } from '../actions/alert';
// import { register } from '../actions/auth';
// let formData = new FormData(); 

import React, { useState, formData, setFormData } from 'react';
import axios from 'axios';
import { Link, Redirect} from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { PromiseProvider } from 'mongoose';
import { setAlert } from '../actions/alert';
import { register } from '../actions/auth';

const Register = ({ setAlert, register, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })


const { name, email, password, password2 } = formData;

const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

const onSubmit = async e => {
    e.preventDefault();
    if(password !== password2){
        setAlert('Passwords do not match', 'danger');
    } else {
        register({ name, email, password });
    }
}
    
if(isAuthenticated) {
    return <Redirect to="/Home" />
}

return (
    <div>
        <h1>Sign Up</h1>
        <form onSubmit={e => onSubmit(e)}>
            <div>
            <input type = 'text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={e => onChange(e)}
            minLength='6'
            />
            </div>
            <div>
            <input type = 'text'
            placeholder='Email'
            name='email'
            value={email}
            onChange={e => onChange(e)}
            minLength='6'
            />
            </div>
            <div>
            <input type = 'text'
            placeholder='Password'
            name='password'
            value={password}
            onChange={e => onChange(e)}
            minLength='6'
            />
            </div>
            <div>
            <input type = 'text'
            placeholder='Confirm password'
            name='password2'
            value={password2}
            onChange={e => onChange(e)}
            minLength='6'
            />
            </div>
            
            <input type='submit' value='Register'
            />
        </form>
</div>
)
};

// Register.propTypes = {
//     setAlert: PropTypes.func.isRequired,
//     register: PropTypes.func.isRequired,
//     isAuthenticated: PropTypes.bool
// }

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, 
    { setAlert, register })(Register)