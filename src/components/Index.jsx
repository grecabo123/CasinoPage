import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import PublicRoutes from '../routes/PublicRoutes'


function Index() {
    return (
        <React.Fragment>
            <Switch>
                {
                    PublicRoutes.map((route, idx) =>{
                        return (
                            route.component && (
                                <Route 
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    render={(props) => <route.component {...props} />}
                                />
                            )
                        )
                    })
                }
                <Redirect from='/' to={'/vtimeteach'} />
            </Switch>
        </React.Fragment>
    )
}

export default Index