import { io } from 'socket.io-client';

const URL = ENV_VARS.SOCKET_HOST;

console.log(ENV_VARS);

export const socket = io(URL);
