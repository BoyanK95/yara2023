import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import NotFound from './pages/NotFoundPage/NotFound';
import FormPage from './pages/FormPage/FormPage';

function App() {
    return (
        <Layout>
            <Switch>
                <Route path='/' exact>
                    <HomePage />
                </Route>
                <Route path='/form'>
                    <FormPage />
                </Route>
                <Route path='/table'>
                    <h1>TEST Table</h1>
                </Route>
                <Route path='*'>
                    <NotFound />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
