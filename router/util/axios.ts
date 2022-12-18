import axioas from 'axios';
import { env } from 'process';

const axios = axioas.create({
  headers: {
    post: { ['Content-Type']: 'application/json' },
    put: { ['Content-Type']: 'application/json' },
    patch: { ['Content-Type']: 'application/json' },
    timeout: 3000, // default 3s
    Accept: 'application/hal+json; application/json; text/plain; */*;',
  },
  withCredentials: true,
});

axios.defaults.baseURL = env.BLOG_CORE_URL;

export default axios;
