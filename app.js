/**
 * Created by Iaroslav Zhbankov on 10.10.2016.
 */

var streams = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var offlineStreams = [];
streams.forEach(function (item, i, arr) {
    var getUrl_2 = 'https://api.twitch.tv/kraken/streams/' + item;
    $.ajax({
        type: 'GET',
        url: getUrl_2,
        headers: {
            'Client-ID': 'kg2h4jxqp95a4m3xcavhfoe3b2ea1b1'
        },
        success: function (data) {
            if (!data.stream) {
                offlineStreams.push(item);
            }
        }
    });
});

streams.forEach(function (item, i, arr) {
    var getUrl = 'https://api.twitch.tv/kraken/channels/' + item;

    $.ajax({
        type: 'GET',
        url: getUrl,
        headers: {
            'Client-ID': 'kg2h4jxqp95a4m3xcavhfoe3b2ea1b1'
        },
        success: function (data) {
            if (offlineStreams.indexOf(item) == -1) {
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

document.querySelector("#active").addEventListener("click", function () {
    var streamElements = document.querySelectorAll(".stream");
    streamElements.forEach(function (item, i, arr) {
        if (item.querySelector(".stream-status").innerHTML == "Offline") {
            item.style.display = 'none';
        } else {
            item.style.display = 'block';
        }
    });
});
document.querySelector("#offline").addEventListener("click", function () {
    var streamElements = document.querySelectorAll(".stream");
    streamElements.forEach(function (item, i, arr) {
        if (item.querySelector(".stream-status").innerHTML == "Offline") {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});
document.querySelector("#all").addEventListener("click", function () {
    var streamElements = document.querySelectorAll(".stream");
    streamElements.forEach(function (item, i, arr) {
        item.style.display = 'block';
    });
});