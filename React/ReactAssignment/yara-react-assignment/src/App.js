import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import Form from './components/FormComponent/Form';
import NotFound from './pages/NotFoundPage/NotFound';

function App() {
    return (
        <Layout>
            <Switch>
                <Route path='/' exact>
                    <HomePage />
                </Route>
                <Route path='/form'>
                    <Form />
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
