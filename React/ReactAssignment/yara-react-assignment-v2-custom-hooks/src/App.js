import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import NotFound from './pages/NotFoundPage/NotFound';
import FormPage from './pages/FormPage/FormPage';
import TablePage from './pages/TablePage/TablePage';

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
                    <TablePage />
                </Route>
                <Route path='*'>
                    <NotFound />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
