import axios from 'axios';

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": undefined, "SSR": true};
const getEnvValue = (key) => {
  const value = Object.assign(__vite_import_meta_env__, { API_URL: "https://ryper-api-express.vercel.app/api", TIME_OUT: "5000", SECRET_KEY: "your_secret_key", _: process.env._, NODE: process.env.NODE, NODE_ENV: process.env.NODE_ENV })[key];
  if (!value) {
    throw new Error(`Environment variable ${key} is not defined`);
  }
  return value;
};
const env = {
  apiUrl: getEnvValue("API_URL"),
  timeout: Number(getEnvValue("TIME_OUT")),
  secretKey: getEnvValue("SECRET_KEY"),
  environment: getEnvValue("NODE_ENV"),
  isProduction: getEnvValue("NODE_ENV") === "production",
  isDevelopment: getEnvValue("NODE_ENV") === "development"
};

const api = axios.create({
  baseURL: env.apiUrl,
  headers: {
    "Content-Type": "application/json"
  },
  timeout: env.timeout
});
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject({
      status: error.response?.status || 500,
      message: error.response?.data?.message || "Terjadi error yang tidak diketahui"
    });
  }
);

const handleApiError = (error, context = "data") => {
  let errorMessage = `Terjadi kesalahan saat mengambil ${context}`;
  if (error.status === 404) {
    errorMessage = `Konten ${context} tidak ditemukan, silakan coba lagi nanti`;
  } else if (error.status >= 500) {
    errorMessage = "Terjadi masalah pada server, silakan coba lagi nanti";
  } else if (error.message && error.message.includes("timeout")) {
    errorMessage = "Waktu permintaan habis, periksa koneksi internet Anda dan coba lagi";
  } else if (error.message && error.message.includes("Network Error")) {
    errorMessage = "Tidak dapat terhubung ke server, periksa koneksi internet Anda";
  }
  console.error(`Gagal mengambil ${context}:`, error);
  return errorMessage;
};

const formatWIB = (dateISO) => {
  const date = new Date(dateISO);
  const formatted = new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(date);
  return `${formatted} WIB`;
};

export { api as a, formatWIB as f, handleApiError as h };
