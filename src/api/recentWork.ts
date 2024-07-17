// import axios from 'axios';

// const API_URL = 'http://localhost:3000';

// export interface WorkData {
//   id?: number;  // Gunakan optional karena id mungkin tidak ada saat membuat data baru
//   title: string;
//   description: string;
//   imageUrl: string;
//   date: string;
// }

// export const getRecentWorks = async () => {
//   const response = await axios.get(`${API_URL}/get-recent_works`);
//   return response.data;
// };

// export const createRecentWork = async (workData: WorkData) => {
//   const response = await axios.post(`${API_URL}/store-recent_works`, workData);
//   return response.data;
// };

// export const updateRecentWork = async (workData: WorkData) => {
//   const response = await axios.post(`${API_URL}/update-recent_works`, workData);
//   return response.data;
// };

// export const deleteRecentWork = async (id: number) => {
//   const response = await axios.post(`${API_URL}/delete-recent_works`, { id });
//   return response.data;
// };