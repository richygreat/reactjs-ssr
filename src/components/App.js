import React from 'react'
import Home from './Home'
import { Route } from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
            </div>
        );
    }
}

export default App