## Redis API example
#### Express + Redis + Docker

### How o run
Clone this repo and make a simple container with Redis using this command:
```sh
sudo docker run -d --name redis-test -p 127.0.0.1:6379:6379 redis 
```
After, run `npm i` and `node .`.