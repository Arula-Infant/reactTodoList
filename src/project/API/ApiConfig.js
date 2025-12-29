import axios from "axios"
const ApiConfig = axios.create({
    baseURL: "http://localhost:8000"
})

export default ApiConfig