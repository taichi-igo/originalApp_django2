import React from 'react';
import axios from '../../lib/axios';
import './styles.css';
import { Link } from 'react-router-dom';

// Components
import { Row, Col } from 'react-bootstrap';


class PostItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			occupations: [],
      username: "",
      occupation_id: null,
      content: "",
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

	/* ニーズ投稿する */
	postItem = async() => {
		axios.post('needs/', {
			username: this.state.username,
      occupation_id: this.state.occupation_id,
      content: this.state.content,
      })
      .then(response => {
			console.log('response', response);
		})
	}



	render() {
		return (
			<div className="postitem-container">
        <div className="postitem-top">ニーズ投稿</div>
        <div className="postitem-item">
          <div className="postitem-name">ユーザー名</div>
          <input
            value={this.state.username}
            onChange={(e) => this.setState({ username: e.target.value})}
          />
        </div>
        <div className="postitem-item">
          <div className="postitem-name">あなたの業種</div>
					<select
            value={this.state.occupation_id}
            onChange={(e) => this.setState({ occupation_id: e.target.value})}>
            <option value="選択して下さい">選択して下さい</option>
            {this.state.occupations.map((occupation, index) => {
              return(
              <option value={occupation.id} >{occupation.name}</option>
            )})}
          </select>
        </div>
        <div className="postitem-item">
          <div className="postitem-name">投稿内容</div>
          <textarea
            rows = "10"
            cols = "60"
            type="textarea"
            value={this.state.content}
            onChange={(e) => this.setState({ content: e.target.value})}
          />
        </div>
          <button onClick={this.postItem}><Link to='/postitem/finish'>投稿</Link></button>
			</div>
		);
	}
}

export default PostItem;
