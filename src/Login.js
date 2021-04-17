import React from 'react';
import { Button } from '@material-ui/core';
import './Login.css';
import { auth, provider } from './firebase';

function Login() {
	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				console.log(result);
			})
			.catch((err) => alert(err.message));
	};
	return (
		<div className="login">
			<div className="login__container">
				<div className="login__text">
					<h1>Sign In to Chat App</h1>
					<Button onClick={signIn}>Sign In with Google</Button>
				</div>
			</div>
		</div>
	);
}

export default Login;
