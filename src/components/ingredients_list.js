import React from 'react';
import axios from 'axios';


class IngredientsList extends React.Component {

    state = {
        data: []
    }

    componentDidMount(){
        axios.get('http://localhost:4000/')
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
        var ings = this.state.data;

        console.log(Object.values(ings))
        var romp = Object.values(ings)
        var ings2 = romp.filter(function(e){
            return e._id.Ingredient != ''
         });
         console.log(ings2)
        var data =
        romp.map((ins) => (
<p>

   <h3>ID: {ins._id}</h3>
   <h3>Ingredient: {ins.Ingredient}</h3>
   <h3>Amount: {ins.Amount}</h3>
   <h3>Type: {ins.Type}</h3>
   <h3>FLOZ: {ins.floz}</h3>
   <h3>Cup: {ins.cup}</h3>
   <h3>tbs: {ins.tbs}</h3>
   <h3>tsp: {ins.tsp}</h3>
   <h3>mL: {ins.ml}</h3>
   <h3>L: {ins.L}</h3>

</p>


)) 
        return (
            <p>
            {data}</p>
        )
    }
}
    


export default IngredientsList;