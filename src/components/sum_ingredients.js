import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CardHeader, CardContent, Card, Button } from '@material-ui/core';


class SumIngredients extends React.Component {

    state = {
        data: []
    }

    componentDidMount(){
        axios.get('https://immense-basin-13550.herokuapp.com/sum')
        .then(res => {
      this.setState({
        data: res.data
      } )

          })

        }
        


    render() {
     //   console.log(req.params.id)
        console.log(this.state.data)
        console.log(typeof this.state.data)
        var ings = this.state.data
        console.log(Object.values(ings))
        // var vol = ings.map(filter)

        let hi = Object.values(this.state.data);
        console.log(hi)
// console.log(hi)
let result = [];
let fin = hi.reduce(function(res, value){
  if (! res[value.Ingredient]){
    res[value.Ingredient] = {Ingredient: value.Ingredient, floz: 0, tsp: 0,
    tbs: 0, L: 0, ml: 0, cup: 0, oz: 0, lb: 0, g: 0 };
    result.push(res[value.Ingredient])
  }
  res[value.Ingredient].floz += value.floz;
  res[value.Ingredient].tsp += value.tsp;
  res[value.Ingredient].tbs += value.tbs;
  res[value.Ingredient].L += value.L;
  res[value.Ingredient].ml += value.ml;
  res[value.Ingredient].cup += value.cup;
  res[value.Ingredient].oz += value.oz;
  res[value.Ingredient].lb += value.lb;
  res[value.Ingredient].g += value.g
  return res;
}, {});

console.log(fin)
        var romp = Object.values(fin);
        let i;
        let vol = [];
        let weight = [];
        for(i=0; i< romp.length; i++){
            if(romp.floz === 0 && romp.tsp === 0 && romp.tbs === 0 && romp.L === 0 && romp.ml === 0 && romp.cup === 0){
                weight.push(romp[i])
            } else {
                vol.push(romp[i])
            }
        }
        console.log(vol)
        console.log(weight)
        console.log(vol)
        console.log(weight)
        console.log(romp);
        let n;
        let j;
        for(n=0; n < romp.length; n++){
            if(romp[n].j === 0 || romp[n].j === 'NaN'){
                romp[n].j = 'N/A'
            }
        }
        console.log(romp)
        

        // console.log(func(vol))
        let data2 = romp.map(ing => (
            <Card>
                <CardContent>
                <table class="table">
                    <tr><th scope="col">{ing.Ingredient}</th></tr>
            <tr><td>tbs: {ing.tbs}</td></tr>
            <tr><td>tsp: {ing.tsp}</td></tr>
            <tr><td>floz: {ing.floz}</td></tr>
            <tr><td>cup: {ing.cup}</td></tr>
            <tr><td>mL: {ing.ml}</td></tr>
            <tr><td>L: {ing.L}</td></tr>
            <tr><td>oz: {ing.oz}</td></tr>
            <tr><td>lb: {ing.lb}</td></tr>
            <tr><td>g: {ing.g}</td></tr>
            </table>
            </CardContent>
            </Card>
        ))
            
        return (
            
 <p>{data2}</p>

    
        )
}
}

export default SumIngredients;