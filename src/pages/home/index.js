import React, { useState } from 'react';
import Button from '../../components/button';
import User from '../../components/user';

const Home = props => {
    const [userName, setUserName] = useState('Rohan')
    const changeUserName = (name) => {
        setUserName(name)
    }
    return(
        <div>
            <Button changeUserName={changeUserName}></Button>
            <User userName={userName}></User>
        </div>
    )
}

export default Home;