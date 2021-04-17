import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
function App() {
	const [ user, setUser ] = useState(false);
	return (
		<div className="app">
			{!user ? (
				<Login />
			) : (
				<div className="app__body">
					<Router>
						<Sidebar />
						<Switch>
							<Route path="/rooms/:roomId">
								<Chat />
							</Route>
							<Route path="/">
								<Chat />
							</Route>
						</Switch>
					</Router>
				</div>
			)}
		</div>
	);
}

export default App;
