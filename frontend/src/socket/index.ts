import { io } from 'socket.io-client';

const URL = ENV_VARS.SOCKET_HOST;
const CURRENT_URL = window.location.href.split('/')[1];
export const socket = io(URL || `wss://${CURRENT_URL}`);
