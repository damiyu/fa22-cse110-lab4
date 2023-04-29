function timeCheck() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(timeCheck, 1000);