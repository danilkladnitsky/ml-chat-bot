import { io } from 'socket.io-client';

const URL = ENV_VARS.SOCKET_HOST;
const CURRENT_URL = window.location.href.split('https://')[1];

console.log(ENV_VARS);

export const socket = io(URL || `wss://${CURRENT_URL}`);
