import React from 'react';
import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { FormHelperText } from '@material-ui/core';
import { Button } from '@material-ui/core';
import axios from 'axios';

class AddRecipe extends React.Component {

    state = {
        title: '',
        ingredients: '',
        amounts: '',
        types: '',
        directions: ''
    }

    second = {
        title: '',
        ingredients: '',
        amounts: '',
        types: '',
        directions: ''
    }

    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value}, function(){
            console.log(this.state.title)
        })


    }

    handleChangeIngredients = (event) => {
        this.setState({
            ingredients: event.target.value}, function(){
                console.log(this.state.ingredients);
        })
    }

    handleChangeAmounts = (event) => {
        this.setState({
            amounts: event.target.value}, function(){
                console.log(this.state.amounts);
        })
    }

    handleChangeType = (event) => {
        this.setState({
            types: event.target.value}, function(){
                console.log(this.state.types);
        })
    }
    handleChangeDirections = (event) => {
        this.setState({
            directions: event.target.value}, function(){
                console.log(this.state.directions);
        })
    }



    handleAddIngredient = (event) => {
        this.second.ingredients += this.state.ingredients + ', '
        console.log(this.second.title)
        console.log(this.second.ingredients)
        this.second.amounts += this.state.amounts + ', '
        console.log(this.second.amounts)
        this.second.types += this.state.types + ', '
        console.log(this.second.types)
        this.setState({
            ingredients: '',
            amounts: '',
            types: '',
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let post = {
            title: this.state.title,
            ingredients: this.second.ingredients,
            amounts: this.second.amounts,
            types: this.second.types,
            directions: this.state.directions
        }
        console.log(post)
        axios.post('http://localhost:4000/add_recipe', post)
        let prevState = this.state
        this.setState({
            title: '',
            ingredients: '',
            amounts: '',
            types: '',
            directions: ''
        })

    }

    render() {
             

        let ar = [this.second]
        let data =                 <table>
           { ar.map(obs => {
               return(
                <tr>
                <td><b>Ingredients:</b><p>{obs.ingredients}</p></td>
                <td><b>Amount</b><p>{obs.amounts}</p></td>
                <td><b>Measurement Type</b><p>{obs.types}</p></td>
               </tr> 
               )

           })}

    </table>

        return (
            <div>
 

            <input id="title" name="title" type="text" 
            value={this.state.title} 
            onChange={this.handleChangeTitle} />
            <br></br>
            <h3>Recipe</h3>
                <p>{this.state.title}</p>
                <h3>Ingredients and Measurement</h3>
                    <p>{data}</p>
                <h3>Directions</h3>
                <p>{this.state.directions}</p>
                            {/* <form
                            // method="POST" action='http://localhost:4000/add_recipe' 
                            onSubmit={this.handleSubmit}
                            > */}

            Ingredients:
            <input id="ingredients" name="ingredients" type="text" value={this.state.ingredients} onChange={this.handleChangeIngredients} />
            <br></br>
            Amount:
            <input id="amounts" name="amounts" type="text" value={this.state.amounts} onChange={this.handleChangeAmounts} />
            <br></br>
            Measurement Type:
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
            <button onClick={this.handleAddIngredient}>Add Ingredient</button>
            <br></br>
            Directions:
            <input id="directions" name="directions" type="text" 
            // value={this.state.directions} 
            onChange={this.handleChangeDirections} />
            <br></br>
            <button onClick={this.handleSubmit}>Sub</button>
          {/* </form> */}
            </div>

        )

    }
}

export default AddRecipe;