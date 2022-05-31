import Create from './Create';
import ItemDetails from './Item';
import NotFound from './NotFound';
import Search from './Search';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  
  return (
    <Router>
      <div className="App" class="flex flex-col h-screen">
        <Navbar />        
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>          
            <Route path="/Create">
              <Create />
            </Route>
            <Route path="/Item/:ID">
              <ItemDetails />
            </Route>
            <Route path="/Search">
              <Search />
            </Route>            
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>        
        <Footer />
      </div>
    </Router>
  )
}

export default App;
