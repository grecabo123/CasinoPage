import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Index from './components/Index'

function App() {
    return (
        <Router>
            <Switch>
                <Route path={'/'} name="Index" render={(props) => <Index {...props} />}></Route>
            </Switch>
        </Router>
    )
}

export default App