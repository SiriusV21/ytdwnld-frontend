import React from 'react';
import { Link } from "react-router-dom";
import './LandPage.css';

const LandPage = () => {
  return (
   <header className='sans-serif'>
      <div className='cover vh-100 bg-left bg-center-l bimage'>
        <div className='vh-100 bg-black-80 pb5 pb6-m pb7-l'>
          <nav className='dt w-100' /> 
          <div className='tc-l mt4 mt5-m mt6-l ph3'>
            <h1 className='f2 f1-l fw2 white-90 lh-title mb4'>Before You Proceed!!!</h1>
            <h2 className='fw1 f3 white-80 lh-copy w-70 center mt3 mb5'>Downloading videos from Youtube is against their terms of service. The API hosted here is for educational purpose only. We DO NOT support downloading Youtube videos in any manner!!.</h2>
            <a className='f6 no-underline grow dib v-mid white ba b--blue ph3 pv2 mb3' href='https://www.youtube.com/t/terms'>Read More</a>
            <span className='dib v-mid ph3 white-70 mb3'>or</span>
            <Link to='/Downloader'>
              <input className='f6 no-underline grow dib v-mid bg-blue white ba b--white ph3 pv2 mb3' type='button' value='Proceed to Downloader' />
            </Link>
          </div>
        </div>
      </div> 
    </header>
  )
};

export default LandPage;