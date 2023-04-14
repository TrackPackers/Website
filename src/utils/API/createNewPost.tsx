import axios from 'redaxios';

interface Request {
  name: string;
  message: string;
}

interface Response {
  message: string;
}

function createNewPost(data: Request) {
  return axios.post<Response>(
    `${import.meta.env.VITE_GATEWAY_URL}/contentwriter/create`,
    data
  );
}

export default createNewPost;
