import React from 'react';
import axios from '../../lib/axios';
import './styles.css';
import { Link } from 'react-router-dom';

// Components
import { Row, Col } from 'react-bootstrap';


class NewRegister extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
      occupations: [],
			occupation_id: "",
      username: "",
      email: "",
      birthday: null,
      address: "",
      password: "",
		}
	}

  componentDidMount = () => {
    this.fetchOccupations()
  }

  fetchOccupations = () => {
    axios.get('occupations/')
    .then((response) => {
      console.log(response)
      this.setState({ occupations: response.data})
    })
  }

	/* 新規ユーザー登録する */
	postUser = async() => {
		axios.post('users/', {
			username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      occupation_id: this.state.occupation_id,
      address: this.state.address,
      birthday: this.state.birthday,
      })
      .then(response => {
			console.log('response', response);
		})
	}



	render() {
		return (
			<div className="register-container">
        <div className="register-top">新規登録</div>
        <div className="register-item">
          <div className="register-name">ユーザー名</div>
          <input
            value={this.state.username}
            onChange={(e) => this.setState({ username: e.target.value})}
          />
        </div>
        <div className="register-item">
          <div className="register-name">メールアドレス</div>
          <input
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value})}
          />
        </div>
        <div className="register-item">
          <div className="register-name">パスワード</div>
          <input
            type="password"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value})}
          />
        </div>
        <div className="register-item">
          <div className="register-name">あなたの業種</div>
          <select
            value={this.state.occupation_id}
            onChange={(e) => this.setState({ occupation_id: e.target.value})}>
            <option value="選択して下さい">選択して下さい</option>
            {this.state.occupations.map((occupation, index) => {
              return(
              <option value={occupation.id}>{occupation.name}</option>
            )})}
          </select>
        </div>
        <div className="register-item">
          <div className="register-name">現住所</div>
          <input
            value={this.state.address}
            onChange={(e) => this.setState({ address: e.target.value})}
          />
        </div>
        <div className="register-item">
          <div className="register-name">生年月日</div>
          <input
            value={this.state.birthday}
            onChange={(e) => this.setState({ birthday: e.target.value})}
          />
        </div>
          <button onClick={this.postUser}>登録</button>
			</div>
		);
	}
}

export default NewRegister;
