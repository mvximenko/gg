import { API_URL, CLIENT_ID, TOKEN_URL } from '@/config';

const gamesByRating = `
  fields
    name,
    cover.image_id;
  sort aggregated_rating desc;
  where aggregated_rating_count > 20 & aggregated_rating != null & rating != null & category = 0;
  limit 12;
`;

const fullGameInfo = `
  fields
    name,
    summary,
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
      const res = await fetch(TOKEN_URL, { method: 'POST', cache: 'no-store' });
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
        return data;
      })
      .catch((error) => {
        return error;
      });
  },

  getGamesByRating() {
    return this.request({
      resource: '/games',
      body: gamesByRating,
    });
  },

  getGameById(gameId) {
    return this.request({
      resource: '/games',
      body: `${fullGameInfo} where id = (${gameId});`,
    });
  },

  search(query) {
    console.log(`fields name; search "${query};`);
    return this.request({
      resource: '/games',
      body: `fields name, cover.image_id; where cover.image_id != null; search "${query}"; limit 100;`,
    });
  },
};

await api.getToken();

export default api;
