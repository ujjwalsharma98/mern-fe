import React from 'react';

const Button = props => {
    return(
        <div>
            <button onClick={() => props.changeUserName("hey")}>Click Me!</button>
        </div>
    )
}

export default Button;