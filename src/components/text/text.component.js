import React from 'react';

let Text = (props) => {
    let template = (

        <div className="container">
            <label className="text-center">{props.name}</label>:
            <input type="text" name="name" value={props.value} onChange={props.updateHandler} />
        </div>
    );

    return template;
}

export default Text;