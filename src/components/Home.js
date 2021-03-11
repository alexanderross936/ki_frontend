import React from 'react';
import axios from 'axios';


class Home extends React.Component {

    state = {
        data: []
    }

    // componentDidMount(){
    //     axios.get('http://localhost:4000/')
    //     .then(res => {
    //   this.setState({
    //     data: res.data
    //   } )
    //   console.log(this.state);
    //       })
      
    //     }
        
    render() {
        return (
            <div>
                <p>Hello. Welcome to my App!</p>
                
                
                

            </div>

        )

    }
}

export default Home;