/* 
    Write code for React Router here
Import the Home and About components from 
the component folder. Assign the default
path "/" to the Home component and "/about"
to the About component.

Remember to export the component at the end
*/
import Home from './components/Home';
import React from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddIngredient from './components/add_ingredient';
import IngredientsList from './components/ingredients_list';
import RecipesList from './components/recipes_list';
import AddRecipe from './components/add_recipe';
import Login from './components/Login';
import Register from './components/Register';
import Recipe from './components/Recipe';
import SumIngredients from './components/sum_ingredients';
// Write component imports here //



// Start Router function here //
function Router (){
    return (
        <BrowserRouter>
        <Navigation />
                            <Switch>
                <Route exact path="/" component = {Home} />
                <Route exact path="/add_ingredients" component = {AddIngredient} />
                <Route exact path="/ingredients_list" component = {IngredientsList} /> 
                <Route exact path="/recipes_list" component = {RecipesList} />   
                <Route exact path="/add_recipe" component = {AddRecipe} /> 
                <Route exact path="/login" component = {Login} />  
                <Route exact path="/register" component = {Register} /> 
                <Route path="/recipe/:id" component = {Recipe} />    
                <Route path="/sum" component = {SumIngredients} />       
        </Switch>
        </BrowserRouter>

      
    )
}

export default Router;