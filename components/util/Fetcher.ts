import axios from 'axios';

const fetcher = (uri: string) =>
  axios.get(uri, { withCredentials: true }).then((res) => res.data);

export { fetcher };
