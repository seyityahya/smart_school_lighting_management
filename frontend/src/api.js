import axios from "axios";

axios.interceptors.request.use(
  function (config) {
    const { origin } = new URL(config.url);

    const allowedOrigins = [process.env.REACT_APP_BASE_ENDPOINT];
    const token = localStorage.getItem("access-token");

    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const fetchRegister = async (input) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BASE_ENDPOINT}/api/auth/register`,
    input
  );

  return data;
};

export const fetchLogin = async (input) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BASE_ENDPOINT}/api/auth/login`,
    input
  );

  return data;
};

export const fetchMe = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/api/auth/me`
  );
  return data;
};

export const fetchLogout = async () => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BASE_ENDPOINT}/api/auth/logout`,
    {
      refresh_token: localStorage.getItem("refresh-token"),
    }
  );
  return data;
};

export const fetchSiniflarList = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/api/siniflar`
  );
  return data;
};

export const updateSinif = async (input, sinif_id) => {
  const { data } = await axios.put(
    `${process.env.REACT_APP_BASE_ENDPOINT}/api/siniflar/${sinif_id}`,
    input
  );
  return data;
};

export const fetchLedSinif = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/api/ledAc`
  );
  return data;
};

export const fetchDerslerList = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/api/dersProgrami`
  );
  return data;
};

export const fetchDersCreate = async (input) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BASE_ENDPOINT}/api/dersProgrami/dersUploud`,
    input
  );

  return data;
};

export const fetchSystemStart = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/api/dersProgrami/dersBaslamaBitis`
  );
  return data;
};
