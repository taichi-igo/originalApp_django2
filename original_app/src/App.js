import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
      BrowserRouter,
      Switch,
      Route,
      Link,
} from 'react-router-dom';
import Top from './components/Top/index';
import NeedsList from './components/NeedsList/index';
import Login from './components/Login/index';
import NewRegister from './components/NewRegister/index';
import Explanation from './components/Explanation/index';
import PostItem from './components/PostItem/index';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="menu">
          <div className="header">
            <div className="title">NeedsStation</div>
            <div className="login">
              <div className="login-item"><Link to='/login'>ログイン</Link></div>
              <div className="login-item"><Link to='/register'>新規登録</Link></div>
            </div>
          </div>
          <div className="menu-item-container">
            <ul>
              <li className="menu-item"><Link to='/'>ホーム</Link></li>
              <li className="menu-item"><Link to='/explanation'>NeedsStationとは</Link></li>
              <li className="menu-item"><Link to='/postitem'>ニーズ投稿</Link></li>
              <li className="menu-item"><Link to='/'>ニーズ一覧</Link></li>
            </ul>
          </div>
        </div>

        <div className="content">
          <Switch>
            <Route exact path="/" component={Top}/>
            <Route exact path="/needs/:category" component={NeedsList}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={NewRegister}/>
            <Route exact path="/explanation" component={Explanation}/>
            <Route exact path="/postitem" component={PostItem}/>
          </Switch>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
