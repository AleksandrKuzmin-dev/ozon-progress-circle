import initializeProgressCircle from "./progress-circle.js";

document.addEventListener('DOMContentLoaded', () => {
  const progressValueInput = document.querySelector('#progress-value');
  const progressAnimateButton = document.querySelector('#progress-animate');
  const hideProgressCircleButton = document.querySelector('#progress-hide'); 

  const progressCircle = initializeProgressCircle('#progress-circle-1');
  console.log(progressCircle);

  progressValueInput.addEventListener('input', (e) => {
   const value = e.target.value;

    if (value < 0) e.target.value = 0;
    if (value > 100) e.target.value = 100;

    progressCircle.setProgress(+value);
  });

  progressAnimateButton.addEventListener('change', (e) => {
    progressCircle.animate(e.target.checked);
  });

  hideProgressCircleButton.addEventListener('change', (e) => {
    progressCircle.hidden(e.target.checked);
  });
  
});