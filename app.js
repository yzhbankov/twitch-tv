/**
 * Created by Iaroslav Zhbankov on 10.10.2016.
 */
var streams = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
for (var i = 0; i < streams.length; i++) {
    var getUrl = 'https://api.twitch.tv/kraken/streams/' + streams[i];
    $.ajax({
        type: 'GET',
        url: getUrl,
        headers: {
            'Client-ID': 'kg2h4jxqp95a4m3xcavhfoe3b2ea1b1'
        },
        success: function(data) {
            console.log(data);
        }
    });
}




