function openPopup(videoUrl) {
  var popup = document.getElementById('popup');
  var video = document.getElementById('video');
  video.src = videoUrl;
  popup.style.display = 'block';
}

function closePopup() {
  var popup = document.getElementById('popup');
  var video = document.getElementById('video');
  video.pause();
  video.currentTime = 0;
  popup.style.display = 'none';
}
