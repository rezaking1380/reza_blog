import axios from "axios";

const baseapi = axios.create({
    baseURL: "https://dummyjson.com"
});
export default baseapi