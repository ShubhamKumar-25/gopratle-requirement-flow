// import axios from 'axios';

// const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api/requirements';

// export const submitRequirement = async (formData) => {
//   try {
//     const response = await axios.post(API_URL, formData);
//     return response.data;
//   } catch (error) {
//     throw error.response?.data || { message: 'Something went wrong while submitting.' };
//   }
// };



import axios from 'axios';

// Base URL set karo (bina trailing slash ke)
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

export const submitRequirement = async (formData) => {
  try {
    // Dynamic Base URL + exact API Route
    const response = await axios.post(`${BASE_URL}/api/requirements`, formData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Something went wrong while submitting.' };
  }
};