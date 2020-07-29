import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import Image from './explanation.jpeg'

 class Explanation extends React.Component {

	render() {
		return (
			<div>
        <div className='explanation-title'>NeedsStationとは・・・</div>
        <img src={Image} />
        <div className='explanation-content'><br/>「NeedsStation」は働く方のニーズ投稿サイトです。
          <br/>働く人が思う「こんなものが職場にあったら便利」、「こんなサービスがあれば是非導入したい」という職場でのニーズを投稿してもらい
          <br/>その投稿を見た企業が商品開発やサービス立ち上げのヒントに活用することを目的としています。
        </div>
			</div>
		)
	}
}
export default Explanation;
