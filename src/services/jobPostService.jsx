import axios from 'axios';

export default class JobPostService {
	getAllJobPosts() {
		return axios.get('http://localhost:8080/api/jobadvertisements/getall');
	}
	getByEmpId() {
		return axios.get('http://localhost:8080/api/jobadvertisements/getByEmpId');
	}
	getDataBySortedDesc() {
		return axios.get('http://localhost:8080/api/jobadvertisements/getDataBySortedDesc');
	}
	getDataBySortedAsc() {
		return axios.get('http://localhost:8080/api/jobadvertisements/getDataBySortedAsc');
	}
	add(jobPosts) {
		return axios.post('http://localhost:8080/api/jobadvertisements/add');
	}
	update(jobPosts) {
		return axios.put('http://localhost:8080/api/jobadvertisements/update');
	}
}