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
      
          <Route path='/home'>
            <HomePage newUser={newUser} isLoged={isLoged} />
          </Route>
          
          <Route exact path='/'>
            <Form setNewUser={setNewUser} setIsLoged={setIsLoged} isLoged={isLoged}/>
          </Route>
         
      </Switch>
    </div>
  );
}

export default App;
