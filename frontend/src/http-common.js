import axios from "axios";

export default axios.create({
  baseURL: "http://3.35.170.5:5000",
  headers: {
    "Content-type": "application/json"
  }
});