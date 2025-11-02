document.addEventListener('DOMContentLoaded', function () {
  const questions = document.querySelectorAll('.questions-item');
  const answers = document.querySelectorAll('.questions-answer-container');

  questions.forEach(item => {
    item.addEventListener('click', function () {
      const currentAnswer = item.querySelector('.questions-answer-container');
      const currentIcon = item.querySelector('.questions-item-svg');

      // Закрываем все, кроме текущего
      answers.forEach(ans => {
        if (ans !== currentAnswer) {
          ans.style.maxHeight = null;
          ans.style.opacity = 0;
          ans.parentElement.classList.remove('open', 'active');
          const icon = ans.parentElement.querySelector('.questions-item-svg');
          if (icon) icon.style.transform = 'rotate(0deg)';
        }
      });

      // Переключаем текущий
      if (currentAnswer.style.maxHeight) {
        currentAnswer.style.maxHeight = null;
        currentAnswer.style.opacity = 0;
        item.classList.remove('open', 'active');
        currentIcon.style.transform = 'rotate(0deg)';
      } else {
        currentAnswer.style.maxHeight = currentAnswer.scrollHeight + 'px';
        currentAnswer.style.opacity = 1;
        item.classList.add('open', 'active');
        currentIcon.style.transform = 'rotate(45deg)';
      }
    });
  });
});
