function time(){
    const now = new Date();
    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    hr = hr < 10 ?"0"+hr:hr;
    min = min < 10 ?"0"+min:min;
    sec = sec < 10 ?"0"+sec:sec;

    document.getElementById('time').innerHTML = "TIME "+ hr + " : " + min + " : " + sec
}

setInterval(time,1000);

time();