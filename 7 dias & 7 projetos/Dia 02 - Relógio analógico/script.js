let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');
// 1- Selecionei os elementos

function updateClock(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;
    // 3- O fixZero serve para adicionar um zero quando a contagem passar de 59 segundos

    let sDeg = ((360 / 60) * second) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;
    // 4 - Fiz os cálculos necessário alinhar os ponteiros nos lugares certos

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;

}

function fixZero(time){
    return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000); /* 2- configurei um timer para que a cada 1 segundo ocorra atualização */
updateClock();