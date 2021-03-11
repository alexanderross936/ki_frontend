import React from 'react';
import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { FormHelperText } from '@material-ui/core';
import { Button } from '@material-ui/core';
import axios from 'axios';

class AddIngredient extends React.Component {

    state = {
        ingredient: '',
        type: '',
        amount: ''
    }

    handleChangeIngredient = (event) => {
        this.setState({
            ingredient: event.target.value
        })
        console.log(this.state.ingredient)
    }

    handleChangeAmount = (event) => {
        this.setState({
            amount: event.target.value
        })
        console.log(this.state.amount)
    }

    handleChangeType = (event) => {
        this.setState({
            type: event.target.value
        })
        console.log(this.state.type)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let ingredient = {
            ingredient: this.state.ingredient,
            type: this.state.type,
            amount: this.state.amount
        }

        axios.post('http://localhost:4000/add_ingredient', ingredient)
        this.setState({
            ingredient: '',
            type: '',
            amount: ''
        })

    }

    render() {
        return (
            <div style={{margin: '90px' }}>
                            <form
                            // method="POST" action='http://localhost:4000/add_recipe' 
                            onSubmit={this.handleSubmit}
                            >
                                <h3>Ingredient</h3>
            <input id="ingredient" name="ingredient" type="text" value={this.state.ingredient} onChange={this.handleChangeIngredient} />
            <br></br>
            <h3>Amount</h3>
            <input id="amount" name="amount" type="text" value={this.state.amount} onChange={this.handleChangeAmount} />
            <br></br>
            <h3>Measurement Type:</h3>
            <br></br>
            <select id="types" name="types" value={this.state.value} onChange={this.handleChangeType} >
            <option value="oz">oz</option>
            <option value="tsp">tsp</option>
            <option value="floz">floz</option>
            <option value="L">L</option>
            <option value="ml">ml</option>
            <option value="lb">lb</option>
            <option value="g">g</option>
            <option value="cup">cup</option>
            <option value="tbs">tbs</option>
            </select>
            <br></br>
            <br></br>
            <input type='submit' value="Submit Ingredient"/>
          </form>
            </div>

        )

    }
}

export default AddIngredient;