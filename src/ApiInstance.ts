import axios from "axios";

const BASE_API = process.env.NEXT_PUBLIC_API_URL;

const AxiosApiInstance = axios.create({
  baseURL: `${BASE_API}/`,
  timeout: 2500,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export default AxiosApiInstance; 
