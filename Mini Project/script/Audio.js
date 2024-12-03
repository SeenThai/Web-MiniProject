function stopAndPlay(){
    const audio = document.getElementById('audio');
    let iconPlayAudio = document.getElementById('playImg');
    let iconStopAudio = document.getElementById('stopImg');
    if(audio.paused){
        audio.play();
        iconPlayAudio.classList.add('img-play');
        iconPlayAudio.classList.remove('img-stop');
        iconStopAudio.classList.add('img-stop');
        iconStopAudio.classList.remove('img-play');
    }else if(audio.play){
        audio.pause();
        iconPlayAudio.classList.add('img-stop');
        iconPlayAudio.classList.remove('img-play');
        iconStopAudio.classList.add('img-play');
        iconStopAudio.classList.remove('img-stop');
    }
}