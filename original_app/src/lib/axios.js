import Axios from 'axios';

// トークン追加（ログイン追加）
export default Axios.create({
	baseURL: 'http://localhost:8080/',
	headers: {
		"Content-Type": "application/json",
		// Authorization: `token ${localStorage.getItem('needstation-token')}`
		// Authorization: `token 522ac8cba9f6fc2771384ec0d1708df4cf10883d`
		// "Authorization": "Token " + localStorage.getItem("needsstation-token")
	},
})

// ログイン専用
export const axios = Axios.create({
	baseURL: 'http://localhost:8080/',
})
