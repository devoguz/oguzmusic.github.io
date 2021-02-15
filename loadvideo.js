var tag = document.createElement('script');
tag.src = "http://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player1;
var player2;

function onYouTubeIframeAPIReady() {
    player1 = new YT.Player('video1', {
        width: '320',
        height: '216',
        videoId: 'ep0_0W0qWsc',
        playerVars: {
            rel: 0,
            controls: 0,
            autohide: 1,
            disablekb: 1,
            enablejsapi: 1,
            modestbranding: 1,
            showinfo: 0
        },
        events: {
            'onStateChange': onPlayerStateChange1
        }
    });
    player2 = new YT.Player('video2', {
        width: '320',
        height: '216',
        videoId: 'vGotlqDeUGk',
        playerVars: {
            rel: 0,
            controls: 0,
            autohide: 1,
            disablekb: 1,
            enablejsapi: 1,
            modestbranding: 1,
            showinfo: 0
        },
        events: {
            'onStateChange': onPlayerStateChange2
        }
    });
}

function startVideo1() {
    player1.playVideo();
    $('#video_box_B1').delay(1000).fadeIn();
    $("#video_box_B1").delay(20000).hide();
}

function onPlayerStateChange1(event) {
    if (event.data === 2) {
        $("#video_box_B1").hide();
    }
}

function startVideo2() {
    player2.playVideo();
    $('#video_box_E5').delay(1000).fadeIn();
    $("#video_box_E5").delay(20000).hide();
}

function onPlayerStateChange2(event) {
    if (event.data === 2) {
        $("#video_box_E5").hide();
    }
}
