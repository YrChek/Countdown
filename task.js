const p = document.getElementById('timer')
let date = new Date(59000)
let hours = `0${date.getUTCHours()}:`
let min = `0${date.getMinutes()}:`
let sec = `0${date.getSeconds()}`
p.textContent = hours.slice(-3) + min.slice(-3) + sec.slice(-2)
console.log(date.getUTCHours(), ':', date.getMinutes(), ':', date.getSeconds())
let timer = setInterval(() => {
    date.setSeconds(date.getSeconds() - 1)
    let sec = `0${date.getSeconds()}`
    p.textContent = hours.slice(-3) + min.slice(-3) + sec.slice(-2)
}, 1000)
setTimeout(() => { clearInterval(timer); alert('Вы победили в конкурсе'); }, 59100);