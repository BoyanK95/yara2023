import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import Form from './components/FormComponent/Form';

function App() {
    return (
        <Layout>
            <Switch>
                <Route path='/' exact >
                    <HomePage />
                </Route>
                <Route path='/form' >
                    <Form/>
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
