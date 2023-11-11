import axios from 'axios';
import { USER_AUTHORIZATION_TOKEN } from 'shared/const';

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(USER_AUTHORIZATION_TOKEN) || '',
    },
});
