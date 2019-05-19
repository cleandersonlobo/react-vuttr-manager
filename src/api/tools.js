import axios from 'axios';

const { REACT_APP_API_BASE_URL } = process.env;

export const axiosInstance = axios.create({
  baseURL: REACT_APP_API_BASE_URL,
  timeout: 10000,
});

export const ENDPOINTS = {
  tools: 'tools',
  toolsId: id => `tools/${id}`,
  search: find => `tools?q=${find}`,
  searchByTag: tag => `/tools?tags_like=${tag}`,
};

export default {
  get: () => axiosInstance.get(ENDPOINTS.tools),
  post: () => axiosInstance.post(ENDPOINTS.tools),
  search: search => axiosInstance.get(ENDPOINTS.search(search)),
  searchByTag: tag => axiosInstance.get(ENDPOINTS.searchByTag(tag)),
  delete: id => axiosInstance.delete(ENDPOINTS.toolsId(id)),
};
