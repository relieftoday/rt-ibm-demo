import axios from 'axios';

const URL = process.env.NODE_ENV === 'production'? "http://rt-ibm-demo-turbulent-klipspringer-yr.eu-gb.mybluemix.net/api" : "http://localhost:3001/api";
export default axios.create({
  baseURL: URL
});