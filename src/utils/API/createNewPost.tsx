import axios from 'redaxios';

interface Request {
  name: string;
  message: string;
}

interface Response {
  message: string;
}

function createNewPost(data: Request) {
  return axios.post<Response>('http://localhost/contentwriter/create', data);
}

export default createNewPost;
