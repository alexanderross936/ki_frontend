import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { CardHeader, CardContent, Card, Button } from '@material-ui/core';


class RecipesList extends React.Component {

    state = {
        data: []
    }

    componentDidMount(){
        axios.get('http://localhost:4000/recipes')
        .then(res => {
      this.setState({
        data: res.data
      } )

          })

        }
        


    render() {
     //   console.log(req.params.id)
        console.log(this.state.data)
        console.log(this.props.match)
        console.log(typeof this.state.data)
        var ings = this.state.data
        let none = 'You have no recipes';
        console.log(Object.values(ings))
        var romp = Object.values(ings)
        var data =
        romp.map((ins) => (
            <p>
                <Card>
                    <CardHeader title={ins.Title} />
               {/* <h3>ID: {ins._id}</h3> */}
               <CardContent>
               <Link to={`/recipe/${ins._id}`}><Button style= {{ textDecoration: 'none' }} variant='contained'>See more Details</Button></Link>
               {/* <h3>Ingredients: {ins.Ingredients}</h3>
               <h3>Directions: {ins.Directions}</h3> */}
                              </CardContent>
            </Card>
            </p>
            
            
            )) 
        return (
            <p>
            {data}</p>
        )
    }
}
    


export default RecipesList;