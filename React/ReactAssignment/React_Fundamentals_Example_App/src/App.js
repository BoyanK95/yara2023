import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/app.less';
import { GlobalStyle } from './styles/app.css'
import Container from './components/Container'
import ErrorPage from './components/ErrorPage'

// What can we include here:
// Context/Providers
// Themes
// Global styling
// Connection to BE
// Translations
// Route to error page

// Order of Route elements matters when some are NOT exact

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Switch>
                <Route exact path='/not-found' component={ErrorPage} />
                <Route path='/' component={Container} />
               
            </Switch>

            <div className='' style={{ width: '100%', marginTop: '', 'margin-top': '' }}></div>
        </BrowserRouter>
    );
}

render(<App />, document.getElementById('app'));