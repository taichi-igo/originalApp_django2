import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

// Components
import { Row, Col } from 'react-bootstrap';
import axios from '../../lib/axios';

class Top extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      occupations: [],
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

  render() {
    return (
      <div>
        <div className="title-top">業種別ニーズ一覧</div>
        <Row className="occupation-list">
          {this.state.occupations.map((occupation, index) => {
            console.log(occupation, index)
            return (
              <Col xs={12} sm={6} md={4} lg={3} key={index}>
                <Link to={`needs/${occupation.name}`}>
                  <div className={`occupation-button occupation-button-${index}`}><p>{occupation.name}</p></div>
                </Link>

              </Col>

            )
          })}
        </Row>
      </div>
      // {/* <div>
      //   <Row className="tweet-container">
      //     <Col xs={2} sm={2} md={2} lg={2} className="icon-container">
      //       {/* <img src ={me.image} className="icon" style={{backgroundColor: '#ff6967'}}/> /*}
      //     </Col>
      //       <Row className="tweet-text-container">
      //         <textarea className="tweet-input" value={this.state.newTweet}
      //           onChange={(e) => this.setState({ newTweet: e.target.value })}
      //           placeholder="What's happening?"
      //         />
      //       </Row>
      //     </Col>
      //     <button disabled={this.state.newTweet == ""} className="tweet-button-center" onClick={this.tweet}>Tweet</button>
      //   </Row>　
      // </div> */}
    );
  }
}

export default Top;
