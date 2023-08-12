export const HTTP_PORT = process.env.HTTP_PORT || warn('HTTP_PORT is not defined.');
export const MONGO_URI = process.env.MONGO_URI || warn('MONGO_URI is not defined.');
export const DB_NAME = process.env.DB_NAME || warn('DB_NAME is not defined.');
export const JWT_SECRET = process.env.JWT_SECRET || warn('JWT_SECRET is not defined.');

function warn(msg) {
    console.error(msg);
    return false;
}