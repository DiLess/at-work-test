export const fetchUsers = async () => {
  try {
    const response = await fetch('/api/users');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.slice(0, 6);
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};