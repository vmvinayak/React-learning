import React, {Component} from 'react';

class Parent extends Component{
    state = {
        name:''
    }

    render(){
       let template = (
           <h2>HI</h2>
       );

       return template;
    }
}

export default Parent;