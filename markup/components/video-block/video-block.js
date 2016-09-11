var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubePlayerAPIReady() {
  player = new YT.Player('video', {
    
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady,

    }
  });
}

function onPlayerReady(event) {
  // bind events
  var playButton = document.querySelector(".js-video-play"),
      videoOverlay = document.querySelector(".js-video-overlay");
  playButton.addEventListener("click", function() {
    player.playVideo();
    videoOverlay.className += " _hide";
  });
}