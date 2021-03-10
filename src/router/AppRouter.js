import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home'
import StravaRedirect from '../pages/StravaRedirect'
import YourDistance from '../pages/YourDistance'
import Navbar from '../components/Navbar'
import About from '../pages/About'

class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <div className="main">
                    <Switch>
                        <Route path="/" component={Home} exact={true} />
                        <Route path="/redirect" component={StravaRedirect}/>
                        <Route path="/yourdistance" component={YourDistance}/>
                        <Route path="/about" component={About} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
export default AppRouter;