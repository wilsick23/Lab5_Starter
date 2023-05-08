// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var select = document.getElementById("horn-select");
  var image = document.querySelector('img[src="assets/images/no-image.png"]');
  var volume = document.getElementById("volume");
  var volumeIcon = document.querySelector('img[src="assets/icons/volume-level-2.svg"]');
  var audio = document.getElementsByClassName('hidden')[0];
  var button = document.getElementsByTagName('button')[0];
  const confetti = new JSConfetti();

  select.addEventListener("change", function() {
    var selected = select.value;

    if (selected == "air-horn") {
      image.src = 'assets/images/air-horn.svg';
      audio.src = 'assets/audio/air-horn.mp3';
    }

    else if (selected == "car-horn") {
      image.src = 'assets/images/car-horn.svg';
      audio.src = 'assets/audio/car-horn.mp3';
    }

    else if (selected == "party-horn") {
      image.src = 'assets/images/party-horn.svg';
      audio.src = 'assets/audio/party-horn.mp3';
    }

  });

  volume.addEventListener("input", function() {
    var volumeLevel = volume.value;

    if (volumeLevel == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    }
    else if (volumeLevel > 1 && volumeLevel < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    }
    else if (volumeLevel >= 33 && volumeLevel < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    }
    else if (volumeLevel >= 67 && volumeLevel <= 100) {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
    
    audio.volume = volumeLevel / 100;
  });

  
  button.addEventListener("click", function() {
    audio.play();
    if (select.value == "party-horn") {
      confetti.addConfetti();
    }
  });
}