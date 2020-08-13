import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
// Components
import { Row, Col } from 'react-bootstrap';
import axios from '../../lib/axios';
import Auth from '../../lib/auth';

class NeedsList extends React.Component {
  constructor(props) {
    super(props);
    console.log('props',this.props);


    this.state = {
      needs: [],
      //occupation: this.props.match.params.category,
    }
    this.occupation = this.props.match.params.category;

  }


componentDidMount = () => {
  this.fetchOccupations()
}

fetchOccupations = () => {
  axios.get('needs/', {
    params: {
      occupation: this.occupation
    }
  })
  .then((response) => {
    console.log(response)
    this.setState({ needs: response.data})
  })
}

  render() {
    return (
      <Auth>
      <div>
        <div className='occupation'>{ this.occupation }</div>
        <Row className="needs-list">
          {this.state.needs.map((need, index) => {
            console.log(need, index)
            return (
              <Col className='needs-detail' xs={12} sm={12} md={12} lg={12} key={index}>
                <div className="needs-username">ユーザーネーム：{need.username} &emsp;&emsp; 年齢：{need.user_id.age}</div>
                <div className="needs-username">投稿日時：{need.created_at}</div>
                <div className="needs-username">内容：{need.content}</div>
              </Col>

            )
          })}
        </Row>
      </div>
      </Auth>
    );
  }
}

export default NeedsList;
