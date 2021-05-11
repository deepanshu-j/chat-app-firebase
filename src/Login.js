import React from 'react';
import { Button } from '@material-ui/core';
import './Login.css';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
	// const [{user},dispatch]=useStateValue();
	//the first part is the state and we are destructring it//the second part is the dispatch
	const [ {}, dispatch ] = useStateValue();

	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				// console.log(result);
				//rather than just console.log ing we want it to update our context State
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user
				});
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
