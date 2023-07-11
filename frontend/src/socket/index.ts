import { io } from 'socket.io-client';

const URL = ENV_VARS.SOCKET_HOST;

export const socket = io(URL);
