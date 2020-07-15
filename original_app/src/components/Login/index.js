import React from 'react';
import { axios } from '../../lib/axios';

export default class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		}
	}

	login = async () => {
		const errors = [];
		if (this.state.email==="")
			errors.push('ユーザー名を入力して下さい');
		if (this.state.password==="")
			errors.push('パスワードを入力して下さい');

		if (errors.length===0) {
			const response = await axios.post('/rest-auth/login/', {
				username: this.state.email,
				password: this.state.password,
			})
			localStorage.setItem("twitter-token", response.data.key);
			this.props.history.push('/');

		}
		else {
			alert(errors.join('\n'))
		}
	}

	render() {
		return (
			<div>
				{/* <form> */}
					<input
						type="text"
						placeholder="email"
						value={this.state.email}
						onChange={(e) => this.setState({ email: e.target.value })}
					/>
					<input
						type="password"
						placeholder="password"
						value={this.state.password}
						onChange={(e) => this.setState({ password: e.target.value })}
					/>
					<button onClick={this.login}>送信</button>
				{/* </form> */}
			</div>
		)
	}
}
