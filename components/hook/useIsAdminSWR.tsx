import useSWR from 'swr';
import { fetcher } from '../util/Fetcher';

const THIRTHY_MIN_AT_MILLI = 1800000;
const USER_AUTH_URI = '/api/user';

const useIsAdminSWR = () =>
  useSWR(USER_AUTH_URI, fetcher, {
    refreshInterval: THIRTHY_MIN_AT_MILLI,
  });

export { useIsAdminSWR };
