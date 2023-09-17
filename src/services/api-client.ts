import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "324045113bab44c6a56c4d16f04bba96",
  },
});
