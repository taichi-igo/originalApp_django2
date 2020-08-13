import React from 'react';
import './styles.css';



class PostItemFinish extends React.Component {
	constructor(props) {
		super(props);
		console.log('props',this.props);

	}

	render() {
		return (
			<div className="postitem-finish">
				投稿が完了しました。
			</div>
		);
	}
}

export default PostItemFinish;
