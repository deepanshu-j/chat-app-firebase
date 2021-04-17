import React, { useState, useEffect } from 'react';
import './SidebarChat.css';
import { Avatar } from '@material-ui/core';

import db from './firebase';

import { Link } from 'react-router-dom';

function SidebarChat({ id, name, addNewChat }) {
	const [ seed, setSeed ] = useState('');

	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
	}, []);

	const createChat = () => {
		const roomName = prompt('Please Enter Room Name');
		//DO SOME CLEVER DB STUFF!!
		if (roomName) {
			db.collection('rooms').add({
				name: roomName
			});
		}
	};
	return !addNewChat ? (
		<Link to={`/rooms/${id}`}>
			<div className="sidebarChat">
				<Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
				<div className="sidebarChat__info">
					<div> {name} </div>
					<div className="sidebarChat__info__p"> Last Message...</div>
				</div>
			</div>
		</Link>
	) : (
		<div onClick={createChat} className="sidebarChat">
			<h3>ADD NEW CHAT</h3>
		</div>
	);
}

export default SidebarChat;
