# Progress-circle

![Static Badge](https://img.shields.io/badge/JavaScript-yellow)
![Static Badge](https://img.shields.io/badge/HTML-orange)
![Static Badge](https://img.shields.io/badge/CSS-blue)

## Описание
**Progress-circle** - это веб-приложение, отображающее круговой индикатор прогресса с возможностью управления значением прогресса, включением/отключением анимации и скрытием/отображением индикатора.

Для удобства демонстрации была добавлена панель управления индикатором.

## Демонстрация
Перейдите по ссылке: https://aleksandrkuzmin-dev.github.io/ozon-progress-circle/


## Функциональность
- Круговой индикатор прогресса: отображает текущий процент выполнения.
- Управление прогрессом: позволяет задавать значение прогресса в диапазоне от 0 до 100.
- Анимация: включает/отключает анимацию вращения индикатора.
- Скрытие/отображение: скрывает или отображает индикатор прогресса.
- Управление размером: круговой индикатор автоматически подстраивается под размер контейнера, в котором находится.

## Использование
### Подключение к своему проекту:
#### JavaScript:
1. Скопируйте файл **progress-circle.js** из папки js и поместите в файлы своего проекта.
2. Импортируйте функцию **initializeProgressCircle** (либо назовите её по своему, используется export default) из файла **progress-circle.js** в собственный JavaScript файл (например main.js)
```js
import initializeProgressCircle from "путь к progress-circle.js";
```

#### Стили CSS:
1. Скопируйте файл **progress-circle.css** из папки css и поместите в файлы своего проекта.
2. Подключите файл **progress-circle.css** к странице, на которой используется *progress-circle*.
```html
<link rel="stylesheet" href="./css/progress-circle.css">
```

#### HTML-разметка:
1. Разместите следующий код в контейнере, в котором будет располагаться круговой индикатор. 
2. Укажите `ID` для элемента `svg`. 

```html
<svg class="progress-circle" id="progress-circle-1">
  <circle class="progress-circle__ring-background"/>
  <circle class="progress-circle__ring"/>
</svg>
```
Размер кругового индикатора автоматически подстраивается под размер контейнера, в котором он размещен.

### Управление круговым индикатором
В JavaScript файле, в который был импортирован круговой индикатор, создайте переменную с нужным вам именем и присвойте ей результат вызова функции **initializeProgressCircle**, передав в качестве аргумента `ID` элемента `svg`. (см. предыдущий шаг).

```js
import initializeProgressCircle from "./progress-circle.js";

document.addEventListener('DOMContentLoaded', () => {
  const progressCircle = initializeProgressCircle('#progress-circle-1');
});
```

Функция **initializeProgressCircle** вернет объект с функциями управления круговым индикатором:
- **setProgress()** - в качестве аргумента принимает числовое значение (тип Number) от 0 до 100 и служит для управление прогрессом. По умолчанию: 0.
- **hidden()** - в качестве аргумента принимает boolean значение и скрывает/показывает круговой индикатор (true - круговой элемент скрыт, false - показан). По умолчанию: false.
- **animate()** - в качестве аргумента принимает boolean значение и включает/отключает анимацию движения кругового индикатора (true - анимация включена, false - отключена). По умолчанию: false.

```js
 const progressCircle = initializeProgressCircle('#progress-circle-1');
 console.log(progressCircle);

 // Output:
  {
    setProgress(),
    hidden(),
    animate()
  }
 //
```

#### Пример управления индикатором:
```js
const progressCircle = initializeProgressCircle('#progress-circle-1');

progressCircle.setProgress(80); // устанавливает показатель прогресса на 80%
progressCircle.hidden(true); // скрываем круговой индикатор
progressCircle.animate(true); // включает анимацию движения кругового индикатора
```




## Дополнительные настройки и предупреждения
1. Не рекомендуется изменять названия классов в разметке HTML, так как к ним привязаны стили и на них завязана работа JavaScript файлов.
2. В файле progress-circle.js в самом верху скрипта расположены настройки по умолчанию, которые при необходимости можно изменять.

```js
// Настройки по умолчанию
  const defaultRingProgressSelector = '.progress-circle__ring'; // селектор кольца прогресса
  const defaultRingBackgroundSelector = '.progress-circle__ring-background'; // селектор фонового кольца прогресса

  const widthRingProgress = 10; // ширина полосы прогресса
  const defaultPercentProgress = 0; // изначальный процент прогресса
  const nameAnimationInCss = 'progress-circle-rotate'; // название keyframes анимации в css
  const speedAnimation = 3 // скорость вращения круга при включенной анимации
//
```

