import axios from "axios"

export const getTests = async () => {
	return await axios.get('http://localhost:3100/tests')
}

export const getTest = async id => {
	return await axios.get(`http://localhost:3100/tests/${id}`)
}

export const getSites = async () => {
	return await axios.get('http://localhost:3100/sites')
}

