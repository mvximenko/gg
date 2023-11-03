export const API_URL = 'https://api.igdb.com/v4';
export const IMAGE_API = 'https://images.igdb.com/igdb/image/upload';

export const CLIENT_ID = process.env.IGDB_CLIENT_ID;
export const CLIENT_SECRET = process.env.IGDB_CLIENT_SECRET;

export const TOKEN_URL = `https://id.twitch.tv/oauth2/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`;

// cover_small	90 x 12
// screenshot_med	569 x 320
// cover_big	264 x 374
// logo_med	284 x 160
// screenshot_big	889 x 500
// screenshot_huge	1280 x 720
// thumb	90 x 90
// micro	35 x 35

export const IMAGE_SIZES = {
  'c-sm': 't_cover_small',
  'c-big': 't_cover_big',
  's-md': 't_screenshot_med',
  's-big': 't_screenshot_big',
  's-huge': 't_screenshot_huge',
  logo: 't_logo_med',
  thumb: 't_thumb',
  micro: 't_micro',
  hd: 't_720p',
  'full-hd': 't_1080p',
};
