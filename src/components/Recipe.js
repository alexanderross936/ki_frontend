import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import { CardHeader, CardContent, Card, Button } from '@material-ui/core';

class Recipe extends React.Component {

    // console.log(grep)
    state = {
        data: []
    }

    handleUseRecipe = () => {

        let strIngredients = this.state.data.Ingredients;
        console.log(strIngredients)
        let arIngredients = strIngredients.split(", ");
        let strAmounts = this.state.data.Amounts;
        let arAmounts = strAmounts.split(", ");
        let strTypes = this.state.data.Types;
        let arTypes = strTypes.split(", ");
        let negAmounts = arAmounts.map(amount => {
            return amount*(-1)
        })
        console.log(arIngredients);
        console.log(arAmounts);
        console.log(arTypes);
        console.log(typeof negAmounts)
        let i;
        let ing_add = [];
        for(i = 0; i < arIngredients.length - 1; i++){
            ing_add.push( {
                Ingredient: arIngredients[i],
                Type: arTypes[i],
                Amount: negAmounts[i]
            })
        }
        console.log(ing_add);
        let j;
        for(j = 0; j < ing_add.length; j++){
            let dat = ing_add[j]
            axios.post('http://localhost:4000/use_recipe', dat)
            console.log(dat)
            alert('Recipe ingredients have been subtracted from ingredient list')
        }

        

        // For Each
    }

    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`http://localhost:4000/recipe/${id}`)
        .then(res => {
      this.setState({
        data: res.data
      } )
      console.log(this.state.data)
          })

    }
render(){

    let data =
        <p>
            <Card>
                <CardHeader title={this.state.Title} />
           {/* <h3>ID: {ins._id}</h3> */}
           <CardContent>
               <h3>Ingredients: {this.state.data.Ingredients}</h3>
                <h3>Amounts: {this.state.data.Amounts}</h3>
                <h3>Measurements: {this.state.data.Types}</h3>
                <h3>Directions: {this.state.data.Directions}</h3>
                 <Button 
      onClick={this.handleUseRecipe}
      >Use Recipe</Button>
                          </CardContent>
        </Card>
        </p>;
    
    console.log(this.state.data)
    console.log(this.state.data.Amounts)
    console.log(this.state.data.Ingredients)
    console.log(this.state.data.Types)
return (
    <div>
      <span>{data}</span>

    </div>
   
)
}
    }

export default Recipe;