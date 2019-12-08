import React from 'react'
import Home from './Home'
import UserAdd from './UserAdd'
import { Route } from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/user-add" component={UserAdd} />
            </div>
        );
    }
}

export default App