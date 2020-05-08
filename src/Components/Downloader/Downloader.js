import React from 'react';
import { Link } from "react-router-dom";
import './Downloader.css';


const Downloader = ({onClick, onChange}) => {
	return(
			<div className='div flex flex-column center'>
				<h1 className='f2 fw5 ft1 white bg-red center tc br4 title mt6'> Youtube Downloader </h1>
			<div className='flex flex-row center items-center justify-around mt6'>
				<input className='center input ' type='url' placeHolder='Enter video URL' onChange={onChange} />
				<input className='input btn shadow-5 br2' type='button' value='Download' onClick={onClick} />
			</div>
			</div>
	)};

export default Downloader;