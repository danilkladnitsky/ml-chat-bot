import { TelegramMessage } from '../domain/telegram';

import { API_ROUTES } from './routes';

class Api {
    private host?: string;

    constructor() {
      this.host = ENV_VARS.API_HOST || 'api/';
    }

    private getUrl(url: string): string {
      return `${this.host}${url}`;
    }

    async fetchTelegramMessages() {
      const res = await fetch(this.getUrl(API_ROUTES.TELEGRAM.GET_MESSAGES()));
      return this.parseResponse<TelegramMessage[]>(res);
    }

    async fetchPredict() {
      const res = await fetch(this.getUrl(API_ROUTES.ML.RUN_PREDICT()), { method: 'POST' });
      return this.parseResponse<string>(res);
    }

    private parseResponse<T,>(res: Response): Promise<T | null> {
      try {
        return res.json().then((data) => data);
      } catch (error) {
        console.log(error);

        return Promise.resolve(null);
      }
    }
}

export default new Api();
