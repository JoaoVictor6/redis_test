import redis from 'redis';
const client = redis.createClient({
    host: '127.0.0.1',
    port: 6379
});

// Disable client's AUTH command.
client['auth'] = null;
function initRedis(){
    client.connect()
        .then(() => console.log('redis is active'))
        .catch(() => console.log('redis error'))
}
export {client, initRedis }