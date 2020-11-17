var video;
var volume;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	volume = document.querySelector("#volume");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	volume.innerHTML = "100%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video");
	video.playbackRate *= 0.9;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate /= 0.9;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime < video.duration - 5){
	video.currentTime += 5;
	}
	else{
	video.currentTime = 0;
	console.log("Start of Video");
	}
	console.log(video.duration)
	console.log("Current Viewing Location" + video.currentTime);
	video.play();
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video");
	if (video.muted == false){
		video.muted = true
		this.innerHTML = "Unmute"
	}
	else{
		this.innerHTML = "Mute"
		video.muted = false
	}
	console.log(video.muted)
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	console.log("Volume Slider");
	video.volume = this.value / 100;
	console.log(this.value)
	volume.innerHTML = this.value + "%"
	
});

document.querySelector("#original").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldTime");
	
});

document.querySelector("#old").addEventListener("click", function() {
	console.log("Old School");
	video.classList.add("oldTime");
	
});
