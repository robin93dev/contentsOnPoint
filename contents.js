
const navy = () => {
document.body.style.backgroundColor = 'navy';
setTimeout(heavynavy, 3000);
}

const heavynavy = () => {
document.body.style.backgroundColor= 'rgb(14, 14, 92)';
setTimeout(navy, 3000);
}

setTimeout(navy, 1000);




