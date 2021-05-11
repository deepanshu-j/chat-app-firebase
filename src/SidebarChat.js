import React, { useState, useEffect } from 'react';
import './SidebarChat.css';
import { Avatar } from '@material-ui/core';

import db from './firebase';

import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function SidebarChat({ id, name, addNewChat }) {
	const [ seed, setSeed ] = useState('');
	const [messages,setMessages]=useState([]);


	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
	}, []);


	useEffect(()=>{
		if(id){
			db.collection('rooms').doc(id).collection('messages').orderBy('timestamp','desc').onSnapshot((snapshot)=>{
				return (setMessages(snapshot.docs.map((doc)=>{
					return doc.data()
				})))
			})
		}
	},[id]);
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
					<div className="sidebarChat__head"> {name} </div>
					<div className="sidebarChat__info__p"> {
						(messages[0]?.message.length < 30)?
						messages[0]?.message : messages[0]?.message.substring(0,29)
					}</div>
				</div>
			</div>
		</Link>
	) : (
		<div onClick={createChat} className="sidebarChat">
			<h3>ADD NEW ROOM</h3>
		</div>
	);
}

export default SidebarChat;
