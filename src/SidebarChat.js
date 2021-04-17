import React, { useState, useEffect } from 'react';
import './SidebarChat.css';
import { Avatar } from '@material-ui/core';

function SidebarChat({ id, name, addNewChat }) {
	const [ seed, setSeed ] = useState('');

	const createChat = () => {
		const roomName = prompt('Please Enter Room Name');
		//DO SOME CLEVER DB STUFF!!
	};
	// useEffect(() => {
	// 	setSeed(Math.floor(Math.random() * 5000));
	// }, []);

	return !addNewChat ? (
		<div className="sidebarChat">
			<Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
			<div className="sidebarChat__info">
				<div> {name} </div>
				<div className="sidebarChat__info__p"> Last Meassage...</div>
			</div>
		</div>
	) : (
		<div onClick={createChat} className="sidebarChat">
			<h3>ADD NEW CHAT</h3>
		</div>
	);
}

export default SidebarChat;
