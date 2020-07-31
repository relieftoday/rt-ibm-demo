import axios from 'axios';

const URL = process.env.NODE_ENV === 'production'? "http://localhost/api" : "http://localhost:3001/api";
export default axios.create({
  baseURL: URL
});