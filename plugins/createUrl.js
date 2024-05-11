const publicKey = '7e019eae99133bc54af88d8e6f8eac5d';
const privateKey = '56bdb645132320b593824b097491a3c8a75536d4';
// var md5 = require('md5');
import md5 from 'md5'
export function createURL() {
    const ts = Date.now();
    const params = new URLSearchParams({
      ts: ts,
      apikey: publicKey,
      hash: md5(ts + privateKey + publicKey),
    });
    const url = params;
    return url;
}