function main() {
    setInterval(load, 1000);
}

function load() {
    let msg = window.document.querySelector('#msg');
    let img = window.document.querySelector('#pic');
    let data = new Date();
    let hora = formatNumberToString(data.getHours());
    let min = formatNumberToString(data.getMinutes());
    let sec = formatNumberToString(data.getSeconds());

    msg.innerHTML = `<p>Agora são ${hora}:${min}:${sec}</p>`;
    if (hora < 12) {
        msg.innerHTML += `<p>Bom dia!</p>`;
        img.src = 'img/manha.jpg';
    } else if (hora < 18) {
        msg.innerHTML += `<p>Boa tarde!</p?`;
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
