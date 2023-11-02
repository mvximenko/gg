export const API_URL = 'https://api.igdb.com/v4';
export const IMAGE_API = 'https://images.igdb.com/igdb/image/upload';

export const CLIENT_ID = process.env.IGDB_CLIENT_ID;
export const CLIENT_SECRET = process.env.IGDB_CLIENT_SECRET;

export const TOKEN_URL = `https://id.twitch.tv/oauth2/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`;

export const COVER_SMALL = 't_cover_small';
export const COVER_BIG = 't_cover_big';

export const SCREENSHOT_MED = 't_screenshot_med';
export const SCREENSHOT_BIG = 't_screenshot_big';
export const IMAGE_HD = 't_720p';
