const publicKey = '7e019eae99133bc54af88d8e6f8eac5d';
const privateKey = '56bdb645132320b593824b097491a3c8a75536d4';
const apiBaseURL = "https://gateway.marvel.com/v1/public";
// var md5 = require('md5');
import md5 from 'md5'
export function createURL(value) {
    const ts = Date.now();
    const params = new URLSearchParams({
      ts: ts,
      apikey: publicKey,
      hash: md5(ts + privateKey + publicKey),
    });
    const endpoint = `${apiBaseURL}/${value}?`;
    const url = endpoint + params;
    return url;
}