import Create from './Create';
import ItemDetails from './Item';
import NotFound from './NotFound';
import Search from './Search';
import Navbar from './Navbar';
import Footer from './Footer';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  
  return (
    <Router>
      <div className="App" class="flex flex-col h-screen">
        <Navbar/>        
          <Switch>
            <Route path="/">
              <Create/>
            </Route>
            <Route path="/item/:id">       
              <ItemDetails/>
            </Route>
            <Route path="/search">       
              <Search/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>        
        <Footer/>
      </div>
    </Router>
  )
}

export default App;
