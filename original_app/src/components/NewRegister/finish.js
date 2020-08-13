import React from 'react';
import './styles.css';



class NewRegisterFinish extends React.Component {
	constructor(props) {
		super(props);
		console.log('props',this.props);

	}

	render() {
		return (
			<div className="postitem-finish">
				新規登録が完了しました。
			</div>
		);
	}
}

export default NewRegisterFinish;
