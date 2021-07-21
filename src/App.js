import './App.css';
import {Switch, Route} from 'react-router-dom';
import Form from './Pages/Form';
import LoginPage from './Pages/LoginPage';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/register'>
          <Form/>
        </Route>
        <Route exact path='/login-page>'>
          <LoginPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
