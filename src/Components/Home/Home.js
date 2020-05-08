import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';
 

const Home = () => {
	return(
			<div className='flex div flex-column'>
				<h1 className='f2 fw5 ft1 white bg-red center tc br4 title mt6'> Youtube Downloader </h1>
				<div className='f4 flex flex-wrap items-center w-60 center mt5 ft2 dark-grey'>
				<p> Downloading Videos from Youtube is against their Terms of Service. The API hosted here is for Research Purpose Only. We do not support Downloading Youtube Videos in any manner!!. You can find Youtube ToS here -> <a className=' dim hover-silver black' href='https://www.youtube.com/t/terms'>https://www.youtube.com/t/terms</a></p>
				</div>
				<div className='center'>
				<Link to='/Downloader'>
					<input className='btn pointer dim shadow-5 br-pill mt6' type='button' value='Go to Downloader' />
				</Link>
				</div>
			</div>
	)};

export default Home;