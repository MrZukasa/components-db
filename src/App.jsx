import Home from './Home';
import Create from './Create';
import ItemDetails from './Item';
import NotFound from './NotFound';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>                        
            <Route exact path="/">        
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/Item/:id">       
              <ItemDetails/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
