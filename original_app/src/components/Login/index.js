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
			console.log('response', this.state.email)
			console.log('response', this.state.password)
			const response = await axios.post('rest-auth/login/', {
				email: this.state.email,
				password: this.state.password,
			})
			localStorage.setItem("needsstation-token", response.data.key);
			this.props.history.push('/');
			console.log('response', this.state.email)


		}
		else {
			alert(errors.join('\n'))
		}
	}

	render() {
		return (
			<div>
				{/* <form> */}
					<div className="email">メールアドレス</div>
					<input
						type="text"
						placeholder="email"
						value={this.state.email}
						onChange={(e) => this.setState({ email: e.target.value })}
					/>
					<br/><br/>
					<div className="email">パスワード</div>
					<input
						type="password"
						placeholder="password"
						value={this.state.password}
						onChange={(e) => this.setState({ password: e.target.value })}
					/><br/><br/>
					<button onClick={this.login}>ログイン</button>
				{/* </form> */}
			</div>
		)
	}
}
