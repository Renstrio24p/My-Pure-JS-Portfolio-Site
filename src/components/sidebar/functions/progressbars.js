
export default function ProgressBarFunction(progressBarId, maxPercentage) {
    var element = document.getElementById(progressBarId);
    var width = 0;
    var identity = setInterval(scene, 10);
    
    function scene() {
      if (width >= maxPercentage) {
        clearInterval(identity);
      } else {
        width++;
        element.style.width = width + '%';
      }
    }
  }