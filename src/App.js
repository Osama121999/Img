import  Navbarr from './Components/Nav/Navbar'
import Main from './Components/Main/Main';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
  
    <Router>
      <Switch>
        <Route exact path="/">
        <Navbarr />
        </Route>
        <Route exact path="/photos">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
    
}

export default App;
