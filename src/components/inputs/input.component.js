import React, {Component} from 'react';
import Text from './../text/text.component'

class InputTest extends Component{

    state = {
        name:'',
        email:'',
        parentData:''
    }

    constructor(props){
        super(props);
        console.log('its constructor...');        
    }

    static getDerivedStateFromProps(props, state){       
        if(props.parentData !== state.parentData){
            return props.parentData;
        }
        return null;
    }

    updateState(field, event){        
        this.setState({
            [field]:event.target.value,            
        })
    }
   
    render = ()=>{
        console.log('its render....');
        let template = (
            <form>
                <Text name="Name" value={this.state.name} updateHandler={this.updateState.bind(this, 'name')} />
                <br/>
                <Text name="Email" value={this.state.email} updateHandler={this.updateState.bind(this, 'email')} />
            </form>
        );
        return template;
    }
}

export default InputTest;

