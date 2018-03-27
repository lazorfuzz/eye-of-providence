const sshpk = require('sshpk');
const atob = require('atob');
const cams = require('./cams.json');

const pubKey = 'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDO++N1mYtGEmVsOZnGiAYIJv62MVAoIbrTaICqtszRhQHIb5Sn6KA49Zf+Rq1YB7jaQR8V9LQuQ7D6rtN4a/zvlz0ZYbanx50n6MDq32wGPIqaS1EjQrqaWBbgRELITNw8Vn8QjNuSOTnO9SCUKvGd0v+9qg2baRwrMjePwKUp+56WA8kLM8jRa5KbONaS9hjty+7p83+qwOnmhsou+tjaX6gpgNwCwtGl2g7FLWNDxlxVwkMMU1qJe9gjBn220KT1t1k0nBGywsNIMWT9w6nhzVg8vLMNRp6jgxRmobPWuruVgigC8RtWzI6gkrsPWXqLWEQUNWcgf9zRE6qtKuZv';

function getCams() {
  return cams;
}

function matchKeys(privKey) {
  let key;
  const pkey = sshpk.parseKey(pubKey, 'ssh');
  try {
    key = sshpk.parsePrivateKey(atob(privKey), 'ssh');
    const data = 'Respecting wamen';
    const message = key.createSign('sha256');
    message.update(data);
    const signature = message.sign();
    const ver = pkey.createVerify('sha256');
    ver.update(data);
    return ver.verify(signature);
  } catch (e) {
    return false;
  }
}

module.exports = {
  getCams,
  matchKeys,
};
