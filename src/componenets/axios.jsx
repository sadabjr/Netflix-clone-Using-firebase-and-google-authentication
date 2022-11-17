// e79ecc75a4f78d4505b7b9441777566e
import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default instance;