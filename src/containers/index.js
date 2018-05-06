import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './home/'
import Technologies from './technologies/'
import Dependency from './dependency/'
import Invalid from './invalid/'
import Header from './header/'
import Nav from 'WebCommon/components/nav/'
import Footer from './footer/'
import configureStore from '../store/configureStore'
import rootReducer from './reducer'


// import app styles
require('../stylus/app.styl')


const BASE_URL = '/';

const navItems = [
    {
      name: 'Home',
      url: BASE_URL
    },
    {
      name: 'Technologies',
      url: BASE_URL + 'technologies'
    },
    {
      name: 'Dependency',
      url: BASE_URL + 'dependency'
    }
];

 
const App = () => {
    const store = configureStore(rootReducer);

    return (
        <Provider store={store}>
            <Router>
                <div className='bodywrap'>
                    <Header />
                    <Nav
                        navItems = {navItems}
                    />
                    <div id='center'>
                        <Switch>
                            <Route exact path={navItems[0].url} component={Home} />
                            <Route path={navItems[1].url} component={Technologies} />
                            <Route path={navItems[2].url} component={Dependency} />
                            <Route component={Invalid} />
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>
        </Provider>
    );
}


ReactDOM.render(<App/>, document.getElementById('app'));