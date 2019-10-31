(function(){
    const speed = document.querySelector('.speed');
    const bar = speed.querySelector('.speed-bar');
    const video = document.querySelector('.flex');

    const handleSpeed = (e) => {
        const y = e.pageY - e.currentTarget.offsetTop;
        // turn y in percent
        const calc =  y / e.currentTarget.offsetHeight;
        const percent = Math.round(calc * 100);
        const height = `${percent}%`;
        bar.style.height = height;
        
        // show the actual number in the speed bar
        const min = 0.1;
        const max = 4;
        const playbackRate = (calc * (max - min) + min).toFixed(2);
        bar.textContent = `${playbackRate}x`;

        // apply the playback rate to the video
        video.playbackRate = playbackRate;
    }

    speed.addEventListener('mousemove', handleSpeed);
}());