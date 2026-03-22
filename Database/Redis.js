const redis=require('redis')
const client = redis.createClient({
    username: 'default',
    password: '0Wk5Tlo8l3fMSofnDUot2yUYsVRnRwgJ',
    socket: {
        host: 'redis-12917.crce286.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 12917
    }
});
client.on('error', err => console.log('Redis Client Error', err));

module.exports=client
