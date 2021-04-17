import React, { useEffect, useState } from 'react';
import './Sidebar.css';

import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';

// import db from './firebase';

function Sidebar() {
	// const [ rooms, setRooms ] = useState([]);

	// useEffect(() => {
	// 	db.collection('rooms').onSnapshot((snapshot) => {
	// 		const temp=
	// 			snapshot.docs.map((doc) => {
	// 				({ id: doc.id, data: doc.data() });
	// 			});
	// 		setRooms(temp);

	// 	});
	// }, []);
	// useEffect(() => {
	// 	db.collection('rooms').onSnapshot((snapshot) => {
	// 		setRooms(
	// 			snapshot.docs.map((doc) => ({
	// 				id: doc.id,
	// 				data: doc.data()
	// 			}))
	// 		);
	// 	});
	// },[]);

	return (
		<div className="sidebar">
			<div className="sidebar__header">
				<Avatar />
				<div className="sidebar__headerRight">
					<IconButton>
						<DonutLargeIcon />
					</IconButton>
					<IconButton>
						<ChatIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
			</div>

			<div className="sidebar__search">
				<div className="sidebar__searchContainer">
					<SearchOutlined />
					<input placeholder="Start or Search new Chat" />
				</div>
			</div>

			<div className="sidebar__chats">
				<SidebarChat addNewChat />

				{/* {rooms.map((room) => {
					<Sidebar key={room.id} id={room.id} name={room.data.name} />;
				})} */}
				{/* <Sidebar key={123} id={1234} name={'SWigygy'} /> */}

				<SidebarChat />
				<SidebarChat />
			</div>
		</div>
	);
}

export default Sidebar;
