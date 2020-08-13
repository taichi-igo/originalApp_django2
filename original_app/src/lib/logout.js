import React from 'react';
import { Redirect } from 'react-router-dom'


class Logout extends React.Component {
  constructor(props) {
    super(props);

  }

componentDidMount = () => {
  this.logout()
}

logout = () => {
  localStorage.clear();
}

render() {
  return (
    <div>ログアウトしました</div>
)
}
}
export default Logout;
