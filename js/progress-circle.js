// Настройки по умолчанию
  const defaultRingProgressSelector = '.progress-circle__ring'; // селектор кольца прогресса
  const defaultRingBackgroundSelector = '.progress-circle__ring-background'; // селектор фонового кольца прогресса

  const widthRingProgress = 10; // ширина полосы прогресса
  const defaultPercentProgress = 0; // изначальный процент прогресса
  const nameAnimationInCss = 'progress-circle-rotate'; // название keyframes анимации в css
  const speedAnimation = 3 // скорость вращения круга при включенной анимации
//

const initializeProgressCircle= (progressCircleSelector) => {
  const circle = document.querySelector(progressCircleSelector);

  if (!circle) {
    throw new Error(`progress-circle: Элемент с селектором '${progressCircleSelector}' не найден. Работа скрипта прекращена.`);
  };

  const ringProgress = circle.querySelector(defaultRingProgressSelector);
  const ringBackground = circle.querySelector(defaultRingBackgroundSelector);

  let currentRadiusCircles = 0;
  let currentPercentProgress = defaultPercentProgress;

  // Устанавливает атрибуты для кольца
  const setRingAttributes = (ringElement, strokeWidth, centerCoordinates, radius) => {
    ringElement.setAttribute('stroke-width', strokeWidth);
    ringElement.setAttribute('cx', centerCoordinates);
    ringElement.setAttribute('cy', centerCoordinates);
    ringElement.setAttribute('r', radius);
  };

  // Обновляет размеры полос прогресса и фона колец, в зависимости от ширины круга
  const updateSizeRings = () => {
    const widthCircle = circle.clientWidth;
    const centerCoordinates = widthCircle / 2;
    currentRadiusCircles = widthCircle / 2 - widthRingProgress;

    setRingAttributes(ringProgress, widthRingProgress, centerCoordinates, currentRadiusCircles);
    setRingAttributes(ringBackground, widthRingProgress, centerCoordinates,  currentRadiusCircles);
  };

  // Валидирует переданное значение прогресса
  const validatePercentValue = (value) => {
    if (typeof value != 'number' || isNaN(value)) {
      console.error(`progress-circle: Для обновления прогресса необходимо передавать число (тип number, но не NaN). Вы передаёте тип '${typeof value}'.`);
      return false;
    };

    if (value > 100) {
      currentPercentProgress = 100;
    } else if (value < 0) {
      currentPercentProgress = 0;
    } else {
      currentPercentProgress = value;
    };

    return true;
  }

  // Обновляет полосу прогресса
  const updateProgress = (percentProgress = currentPercentProgress) => {
    if (!validatePercentValue(percentProgress)) return;

    const fullLengthProgress = 2 * Math.PI * currentRadiusCircles;
    const onePercentProgress = fullLengthProgress / 100;
    const currentLengthProgress = onePercentProgress * currentPercentProgress;

    ringProgress.style.strokeDasharray = `${currentLengthProgress} ${fullLengthProgress - currentLengthProgress}`;
    ringProgress.style.strokeDashoffset = fullLengthProgress * 0.25;
  };

  // Скрывает/показывает круг прогресса
  const hideCircle = (isHidden) => {
    circle.style.display = isHidden ? 'none' : 'block';
  }

  // Включает/отключает анимацию поворота круга
  const animateCircle = (isAnimationEnabled) => {
   circle.style.animation = isAnimationEnabled ? `${nameAnimationInCss} ${speedAnimation}s linear infinite` : ''; 
  }

  updateSizeRings();
  updateProgress(currentPercentProgress);

  window.addEventListener('resize', () => {
    updateSizeRings();
    updateProgress();
  });

  // Возвращает функции для управлении кругом прогресса
  return {
    setProgress: updateProgress,
    hidden: hideCircle,
    animate: animateCircle
  };
};


export default initializeProgressCircle;