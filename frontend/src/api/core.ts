import { TelegramMessage } from '../domain/telegram';

import { API_ROUTES } from './routes';

console.log(ENV_VARS);

class Api {
    private host?: string;

    constructor() {
      this.host = ENV_VARS.API_HOST || 'api/';
    }

    private getUrl(url: string): string {
      return `${this.host}${url}`;
    }

    private parseResponse<T,>(res: Response): Promise<T> {
      return res.json().then((data) => data);
    }

    async fetchTelegramMessages() {
      const res = await fetch(this.getUrl(API_ROUTES.TELEGRAM.GET_MESSAGES()));
      return this.parseResponse<TelegramMessage[]>(res);
    }
}

export default new Api();
