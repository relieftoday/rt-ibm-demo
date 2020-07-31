import axios from 'axios';

const URL = process.env.NODE_ENV === 'production'? "http://demo.relief.today/api" : "http://localhost:3001/api";
export default axios.create({
  baseURL: URL
});