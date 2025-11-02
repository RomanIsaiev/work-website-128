document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.program .list-item');
  const boxes = document.querySelectorAll('.item-show-box');

  // 1. Сразу открыть первый
  if (boxes.length > 0) {
    boxes[0].style.maxHeight = boxes[0].scrollHeight + 'px';
    boxes[0].style.opacity = 1;

    const firstIcon =
      boxes[0].previousElementSibling.querySelector('.program-icon');
    if (firstIcon) firstIcon.classList.add('open');
  }

  // 2. Аккордеон
  buttons.forEach(btn => {
    btn.addEventListener('click', function () {
      const currentBox = this.querySelector('.item-show-box');
      const currentIcon = this.querySelector('.program-icon');

      // Закрыть все, кроме текущего
      boxes.forEach(box => {
        if (box !== currentBox) {
          box.style.maxHeight = null;
          box.style.opacity = 0;

          const icon =
            box.previousElementSibling.querySelector('.program-icon');
          if (icon) icon.classList.remove('open');
        }
      });

      // Переключить текущий
      if (currentBox.style.maxHeight) {
        currentBox.style.maxHeight = null;
        currentBox.style.opacity = 0;
        if (currentIcon) currentIcon.classList.remove('open');
      } else {
        currentBox.style.maxHeight = currentBox.scrollHeight + 'px';
        currentBox.style.opacity = 1;
        if (currentIcon) currentIcon.classList.add('open');
      }
    });
  });
});
