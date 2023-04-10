import axios from 'redaxios';

interface Request {
    message: string;
}

interface Response{
    message: string;
}

function createNewPost(data: Request) {
    return axios.post<Response>(
        `${process.env.REACT_APP_GATEWAY_URL}/contentwriter/new`, data,
    );
}

export default createNewPost;