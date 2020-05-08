import React, {useState} from 'react';
import 'tachyons';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Home from'./Components/Home/Home.js';
import Downloader from'./Components/Downloader/Downloader.js';

function App() {
  const [URL, setURL] = useState('');

  const onChange = (event) => {
    setURL(event.target.value);
  }  
  const onClick = (event) =>{
   
  }
    return(
          <Router>
            <div className= 'App'>
              <Switch>
                <Route exact path='/'>
                  <Home />
                </Route>
                <Route path='/Downloader'>
                  <Downloader onClick={onClick} onChange={onChange}/>
                </Route>
              </Switch>
            </div>
          </Router>
    )
}

export default App;
