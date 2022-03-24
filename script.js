function main() {
    load();
    
    setInterval(load, 1000);
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
