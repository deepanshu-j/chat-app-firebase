import React, { useEffect, useState } from 'react';
import './Chat.css';
import { Avatar, IconButton, Input } from '@material-ui/core';
import { SearchOutlined, AttachFile, InsertEmoticon, Mic } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import db from './firebase';

///to grab the route param in the url ... in this case /rooms/:roomId  we'll grab roomId///
import { useParams } from 'react-router-dom';
import {useStateValue} from './StateProvider';

import firebase from 'firebase';

function Chat() {
	const [ input, setInput ] = useState('');
	// const [ seed, setSeed ] = useState('');
	const { roomId } = useParams();
	const [ roomName, setRoomName ] = useState('');

	const [ messages, setMessages ] = useState([]);
	const [{user},dispatch]=useStateValue();


	useEffect(
		() => {
			if (roomId) {
				db.collection('rooms').doc(roomId).onSnapshot((snapshot) => {
					setRoomName(snapshot.data().name);
				});

				db
					.collection('rooms')
					.doc(roomId)
					.collection('messages')
					.orderBy('timestamp', 'asc')
					.onSnapshot((snapshot) => {
						setMessages(
							snapshot.docs.map((doc) => {
								return doc.data();
							})
						);
					});
			}
		},
		[ roomId ]
	);

	// const createChat = () => {
	// 	const roomName = prompt('Please Enter Room Name');
	// 	//DO SOME CLEVER DB STUFF!!

	// };
	// useEffect(() => {
	// 	setSeed(Math.floor(Math.random() * 5000));
	// }, []);
	const sendMessage = (e) => {
		e.preventDefault();
		// console.log('you typed input', input);
		
		//add it to the db//
		db.collection('rooms').doc(roomId).collection('messages').add({
			message:input,
			name:user.displayName,
			timestamp:firebase.firestore.FieldValue.serverTimestamp(),
		})
		setInput('');

	};
	return (
		<div className="chat">
			<div className="chat__header">
				<Avatar src={`https://avatars.dicebear.com/api/human/123}.svg`} />
				<div className="chat__headerInfo">
					<p className="chat__headerInfo__p">
						<b>{roomName}</b> {new Date(messages[messages.length -1 ]?.timestamp?.toDate() ).toUTCString()}
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
				{/* {console.log(messages)} */}
				{messages.map((message) => {
					return (
						<p className={`chat__message ${message.name===user.displayName && "chat__receiver"} `}>
							<span className="chat__name">{message.name}</span>
							{message.message}
							<span className="chat__timestamp">
							{new Date(message.timestamp?.toDate()).toUTCString()}

							</span>
						</p>
					);
				})}

				{/* <p className="chat__message">
					<span className="chat__name">Noni</span>Chat Message
					<span className="chat__timestamp">3:50PM</span>
				</p>
				<p className="chat__message chat__receiver">
					<span className="chat__name">Noni</span>Chat Message
					<span className="chat__timestamp">3:50PM</span>
				</p> */}
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
