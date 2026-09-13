import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/requirements';

export const submitRequirement = async (formData) => {
  try {
    const response = await axios.post(API_URL, formData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Something went wrong while submitting.' };
  }
};