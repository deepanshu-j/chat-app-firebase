import React, { useEffect, useState } from 'react';
import './Chat.css';
import { Avatar, IconButton, Input } from '@material-ui/core';
import { SearchOutlined, AttachFile, InsertEmoticon, Mic } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Chat() {
	const [ input, setInput ] = useState('');
	const [ seed, setSeed ] = useState('');

	const createChat = () => {
		const roomName = prompt('Please Enter Room Name');
		//DO SOME CLEVER DB STUFF!!
	};
	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
	}, []);
	const sendMessage = (e) => {
		e.preventDefault();
		console.log('you typed input', input);
		setInput('');
	};
	return (
		<div className="chat">
			<div className="chat__header">
				<Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
				<div className="chat__headerInfo">
					<p className="chat__headerInfo__p">
						<b>Chat Name</b> Last seen
					</p>
				</div>
				<div className="chat__headerRight">
					<IconButton>
						<SearchOutlined />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
					<IconButton>
						<AttachFile />
					</IconButton>
				</div>
			</div>

			<div className="chat__body">
				<p className="chat__message">
					<span className="chat__name">Noni</span>Chat Message
					<span className="chat__timestamp">3:50PM</span>
				</p>
				<p className="chat__message chat__receiver">
					<span className="chat__name">Noni</span>Chat Message
					<span className="chat__timestamp">3:50PM</span>
				</p>
			</div>
			<div className="chat__footer">
				<InsertEmoticon className="emoji" />
				<form className="chat__footerForm">
					<Input
						value={input}
						onChange={(e) => {
							setInput(e.target.value);
						}}
						type="text"
						className="chat__footerInput"
					/>
					<button onClick={sendMessage} type="submit">
						send a message
					</button>
				</form>
				<Mic />
			</div>
		</div>
	);
}

export default Chat;
