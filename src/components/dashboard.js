import React, { useState } from 'react';
import { DashboardContainer, SuccessMessage, FailMessage, Uploader } from '../styles/Dashboard.styled';
import axios from 'axios';
import upload from './Upload.png';
import { NavButton } from '../styles/Menu.styled.js';
import Waveform from './waveform.js';
import QuoteBar from './quotebar.js';
import { MenuButton } from '../styles/App.styled';
import Loader from './loader';

const Dashboard = () => {
	const [worked, setWorked] = useState(false);
	//const [song, setSong] = useState(null);
	const [getQuote, setGetQuote] = useState(false);
	const [searchWorked, setSearchWorked] = useState(false);
//	const [song2, setSong2] = useState(null);
//	        const [song, setSong] = useState(null);
//	const [song4, setSong4] = useState(null);    
    const [songs, setSongs] = useState([]);
	const [showSearchMessage, setShowSearchMessage] = useState(false);
	const [print, setPrint] = useState('');
	const [name, setName] = useState('');
	const [showReverse, setShowReverse] = useState(false);
	const [showMessage, setShowMessage] = useState(false);
	const[loading, setLoading] = useState(false);

        function onFileUpload(e) {
		setLoading(true);
		let formData = new FormData();
		formData.append("mySong",
			e.target.files[0]);
		axios.post("/uploadsong", formData, {
			headers: {
		"current-user-name": name
			},
		}).then(({data}) => {
			setLoading(false);
			setPrint(data.message);
			setShowMessage(true);
			data.successfulUpload ? setWorked(true) : setWorked(false);
		})
	}

	function pullUpSongs(e) {
		setLoading(true);
		if(showMessage) setShowMessage(false);
		let send = {
			user: name,
		}
                axios.post("/findsongs", send).then(({data}) => {
			setLoading(false);
			if(data.searchSucceeded) {
				setSongs(data.songs);
				setSearchWorked(true);
				setShowSearchMessage(false);
			} else { 
				setPrint(data.message);
				setSearchWorked(false);
				setShowSearchMessage(true);
			}
		})
	}


	function setUser(e) {
		setName(e.target.value);
	}

	function flipName() {
		setLoading(true);
		let send = {
			user: name,
		}
		axios.get("/reversename", {
			headers: {
		"current-user-name": name
			},
		}).then(({data}) => {
			setLoading(false);
			setPrint(data.message);
			setShowReverse(true);
		});
	}

        function showQuote() {
		setGetQuote(!getQuote);
	}

	return (
		<DashboardContainer>
		<h1>Client Dashboard</h1>
		<label>Enter your name:</label>
		<input type="text" onChange={setUser} value={name}/> <br />
		{loading ? <Loader /> : <div />}
		<Uploader>
		Upload a file:
		<input type="file" onChange={onFileUpload} />
		<img src={upload} alt="upload" />
		</Uploader> <br />
		<Uploader>
		Get a mixing quote:
		<img src={upload} alt="button" onClick={showQuote} />
		</Uploader>
		{showMessage ?
			<>
			{worked ? 
			<SuccessMessage>
			<p>{print}</p> 
			</SuccessMessage> :
			<FailMessage>
			<p>{print}</p>
			</FailMessage>}
			</> :
			<div />
		} <br />
		<NavButton onClick={pullUpSongs}>Your Songs</NavButton> <br />
		<NavButton onClick={flipName}>Reverse Name</NavButton> <br />
		{searchWorked ? songs.map((song) => (  
			<audio src={song} controls />)) : <div />}
		{showSearchMessage ?
				<FailMessage>
				<p>{print}</p>
				</FailMessage>
				: <div />
		}
		{showReverse ? 
				<SuccessMessage>
				<p>{print}</p>
				</SuccessMessage>
				: <div />
		}
		{getQuote ? <QuoteBar /> : <div />}
		</DashboardContainer>
	);
}

export default Dashboard;
