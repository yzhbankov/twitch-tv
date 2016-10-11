/**
 * Created by Iaroslav Zhbankov on 10.10.2016.
 */

var streams = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

streams.forEach(function (item, i, arr) {
    var getUrl = 'https://api.twitch.tv/kraken/channels/' + item;
    $.ajax({
        type: 'GET',
        url: getUrl,
        headers: {
            'Client-ID': 'kg2h4jxqp95a4m3xcavhfoe3b2ea1b1'
        },
        success: function (data) {
            console.log(data);
            if (data.status) {
                $(".twitch-container").append("<div class='row stream no-margin'><div class='col-md-3'></div><div class='col-md-6 no-padding'><div class='col-md-2 stream-icon'>" +
                    "<img src='" + data.logo + "' width='40' height='40'></div>" +
                    "<div class='col-md-2 stream-name'>" + "<a href='https://www.twitch.tv/" + item + "' target=_blank>" + item + "</a></div>" +
                    "<div class='col-md-8 stream-status'>" + data.status.substr(0, 70) + "..." + "</div></div></div>");
            } else {
                $(".twitch-container").append("<div class='row stream no-margin'><div class='col-md-3'></div><div class='col-md-6 no-padding'><div class='col-md-2 stream-icon'>" +
                    "<img src='" + data.logo + "' width='40' height='40'></div>" +
                    "<div class='col-md-2 stream-name'>" + "<a href='https://www.twitch.tv/" + item + "' target=_blank>" + item + "</a></div>" +
                    "<div class='col-md-8 stream-status'>" + "Offline" + "</div></div></div>");
            }
        }
    });
});