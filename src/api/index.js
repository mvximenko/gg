import { API_URL, CLIENT_ID, TOKEN_URL } from '@/config';

const fullGameInfo = `
  fields
    name,
    aggregated_rating, 
    cover.image_id, 

    genres.name,
    screenshots.image_id, 

    release_dates.platform.name,
    release_dates.human,

    involved_companies.developer, 
    involved_companies.publisher, 
    involved_companies.company.name, 

    game_modes.name, 
    game_engines.name, 
    player_perspectives.name,
    themes.name,

    external_games.category, 
    external_games.name, 
    external_games.url, 

    similar_games.name,
    similar_games.cover.image_id,

    websites.url,
    websites.category,
    websites.trusted
;`;

const api = {
  token: null,

  async getToken() {
    try {
      const res = await fetch(TOKEN_URL, { method: 'POST' });
      this.token = await res.json();
    } catch (error) {
      console.error(error);
    }
  },

  request({ resource, ...options }) {
    return fetch(`${API_URL}${resource}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Client-ID': CLIENT_ID,
        Authorization: `Bearer ${this.token.access_token}`,
      },
      ...options,
    })
      .then(async (response) => {
        const data = await response.json();
        return data[0];
      })
      .catch((error) => {
        return error;
      });
  },

  getGameById(gameId) {
    return this.request({
      resource: '/games',
      body: `${fullGameInfo} where id = (${gameId});`,
    });
  },
};

await api.getToken();

export default api;