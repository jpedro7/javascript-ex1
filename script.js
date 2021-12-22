function load() {
    let msg = window.document.querySelector('#msg');
    let img = window.document.querySelector('#pic');
    let data = new Date();
    let hora = data.getHours();
    let min = data.getMinutes();
    msg.innerHTML = `<p>Agora são ${hora}h${min}</p>`;
    if (hora < 12) {
        msg.innerHTML += `<p>Bom dia!</p>`;
        img.src = 'img/manha.jpg'
    } else if (hora < 18) {
        msg.innerHTML += `<p>Boa tarde!</p?`;
        img.src = 'img/tarde.jpg'
    } else {
        msg.innerHTML += `<p>Boa noite!</p>`;
        img.src = 'img/noite.jpg'
    }
}