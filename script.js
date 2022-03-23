function main() {
    load();
    
    setInterval(load, 1000);
}

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    document.querySelector('#music-frame').setAttribute('hidden', true);
    var player = new YT.Player('music-frame', {
        videoId: '-9gEgshJUuY',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
    event.target.setVolume(20);
}

var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}

function stopVideo() {
    player.stopVideo();
}

function load() {
    let data = new Date();
    let msg = window.document.querySelector('#msg');
    let img = window.document.querySelector('#pic');
    let hora = formatNumberToString(data.getHours());
    let min = formatNumberToString(data.getMinutes());
    let sec = formatNumberToString(data.getSeconds());

    msg.innerHTML = `${hora}:${min}:${sec}`;
    if (hora < 12) {
        msg.innerHTML += `<p>Bom dia!</p>`;
        img.src = 'img/manha.jpg';
    } else if (hora < 18) {
        msg.innerHTML += `<p>Boa tarde!</p>`;
        img.src = 'img/tarde.jpg';
    } else {
        msg.innerHTML += `<p>Boa noite!</p>`;
        img.src = 'img/noite.jpg';
    }
}

function formatNumberToString(num) {
    if (num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}
