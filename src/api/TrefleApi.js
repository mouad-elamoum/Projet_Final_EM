import axios from 'axios';

const API_BASE_URL = 'https://trefle.io/api/v1/plants';
const API_TOKEN = 'uu3dsvy-oL-Xk8HJiDbLjlGMiFEIRPU3YY1Cihk0-rM';

export const fetchPlants = async () => {
    const response = await axios.get(`${API_BASE_URL}?token=${API_TOKEN}`);
    return response.data;
};
