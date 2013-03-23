
var redis = require("redis"),
    client1 = redis.createClient(),
    msg_count = 0;

client1.on("subscribe", function (channel, count) {
    console.log("subscribe to " + channel);
});

client1.on("message", function (channel, message) {
    console.log("client1 channel " + channel + ": " + message);
    msg_count += 1;
});

client1.subscribe("tweets");

