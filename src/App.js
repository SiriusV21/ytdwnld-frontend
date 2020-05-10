import React, {useState} from 'react';
import 'tachyons';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import LandPage from './Components/Home/LandPage.js';
import Downloader from'./Components/Downloader/Downloader.js';

function App() {
  const [URL, setURL] = useState('');

  const onChange = (event) => {
    setURL(event.target.value);
  }  

  const onClick = (event) =>{
   console.log(URL);
   fetch(`http://localhost:3000/download?URL=${URL}`)
   .then((encoded_url) => encoded_url.json()) 
   .then((url) => {
      window.open(url, '_blank');
    });
  }

  return(
        <Router>
          <div className= 'App'>
            <Switch>
              <Route exact path='/'>
                <LandPage />
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
