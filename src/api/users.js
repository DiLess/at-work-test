const API_URL = '/api';

export const fetchUsers = async () => {
  try {
    const response = await fetch(`${API_URL}/users`);
    
    if (!response.ok) {
      throw new Error(`Error fetchUsers: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Users:', data);
    return data.slice(0, 6);
  } catch (error) {
    console.error('Error fetchUsers:', error);
    throw error;
  }
};