import axios from "axios";

const apiContext = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
  timeout: 3000,
  Headers: {
    "Content-Type": "application/json",
  },
});

const getAll = async (url) => {
  return await apiContext.get(url);
};

const post = async (url, obj) => {
  return await apiContext.post(url, obj);
};

const put = async (url, obj) => {
  return await apiContext.put(url, obj);
};

export { getAll, post, put };
