import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import './App.css';
import HomePage from './pages/HomePage';

function App() {
    return (
        <Layout>
            <Switch>
                <Route path='/' exact >
                    <HomePage />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
