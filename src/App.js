import './App.css';
import {Switch, Route} from 'react-router-dom';
import Form from './Pages/Form';
import HomePage from './Pages/Home';
import { useState } from 'react';


function App() {
  const [newUser, setNewUser] = useState({})
  const [isLoged, setIsLoged] = useState(false)
  console.log(newUser)
  return (
    <div className="App">
      <Switch>
        {
          isLoged ?
          <Route path='/home'>
            <HomePage newUser={newUser} />
          </Route>
          :
          <Route exact path='/'>
            <Form setNewUser={setNewUser} setIsLoged={setIsLoged} />
          </Route>
        }   
      </Switch>
    </div>
  );
}

export default App;
