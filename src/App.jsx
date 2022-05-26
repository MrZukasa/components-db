
function App() {

  const express = require('express');
  const db = require('./db');
  const app = express();
  const cors = require('cors');
  const PORT = 3306;
  app.use(cors());
  app.use(express.json());


  return (
    <div className="App">
        
    </div>
  )
}

export default App
