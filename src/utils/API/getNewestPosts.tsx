import axios from 'redaxios';
import { Post } from '../Interfaces/Post';

function getNewestPosts() {
  return axios.get<Post[]>(
    `${import.meta.env.VITE_GATEWAY_URL}/newpostsfeed/content`
  );
}

export default getNewestPosts;
