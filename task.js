const p = document.getElementById('timer');
let date = new Date(20000);
let hours = `0${date.getUTCHours()}:`;
let min = `0${date.getMinutes()}:`;
let sec = `0${date.getSeconds()}`;
p.textContent = hours.slice(-3) + min.slice(-3) + sec.slice(-2);
let timer = setInterval(() => {
    date.setSeconds(date.getSeconds() - 1);
    let sec = `0${date.getSeconds()}`;
    p.textContent = hours.slice(-3) + min.slice(-3) + sec.slice(-2);
    if (Number(date.getSeconds()) === 0) {
        setTimeout(() => {                            //setTimeout - для визуального отображения всех нулей и только потом сообщение.
            clearInterval(timer);
            alert('Вы победили в конкурсе');
        }, 100);
    } 
}, 1000)
