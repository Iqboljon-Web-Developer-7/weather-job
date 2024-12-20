import axios from "axios";

const axiosFun = axios.create({
  baseURL:
    "https://api.openweathermap.org/data/2.5/forecast?appid=8e1cc6ea0ef469b31236d5dac695f017",
});

export default axiosFun;
