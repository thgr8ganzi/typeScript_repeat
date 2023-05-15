const period = 1000;
let count = 0;
console.log("program started");
const id = setInterval(() => {
    if (count >= 3) {
        clearInterval(id);
    }
    else {
        console.log(++count);
    }
}, period);