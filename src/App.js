import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

function App() {
	return (
		<div className="app">
			{/* <h3>Hello There!!</h3> */}
			<div className="app__body">
				<Sidebar />
				<Chat />
			</div>
		</div>
	);
}

export default App;
