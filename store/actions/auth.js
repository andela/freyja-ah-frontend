const getToken = () => {
  const token = localStorage.getItem('token');
  return token;
};

export default getToken;
