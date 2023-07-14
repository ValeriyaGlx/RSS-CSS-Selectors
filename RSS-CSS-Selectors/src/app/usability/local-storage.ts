import { checkedAnswers, checkedLevels } from '../utils/constants';

export default function setLocalStorage(): void {
  const level = (document.querySelector('.settings-header_inner h2') as HTMLElement).getAttribute(
    'data-level',
  ) as string;
  localStorage.setItem('levelId', level);
  localStorage.setItem('checkedAnswers', JSON.stringify(checkedAnswers));
  localStorage.setItem('checkedLevels', JSON.stringify(checkedLevels));
}
export function getArraysFromLocalStorage(): void {
  const levelEyes = [...document.querySelectorAll('.level-button_div span:last-child')];
  const checked = JSON.parse(localStorage.getItem('checkedAnswers') as string);
  if (checked) {
    levelEyes.forEach((el) => {
      const elem = el;
      if (checked[levelEyes.indexOf(el)]) {
        (elem as HTMLElement).style.filter = 'sepia(0)';
        (elem as HTMLElement).classList.add('not-filter');
      }
    });

    const levelMArk = [...document.querySelectorAll('.level-button_div span:first-child')];
    const levels = JSON.parse(localStorage.getItem('checkedLevels') as string);

    if (levels) {
      levelMArk.forEach((el) => {
        const elem = el;
        if (levels[levelMArk.indexOf(el)]) {
          (elem as HTMLElement).style.filter = 'sepia(0)';
          (elem as HTMLElement).classList.add('not-filter');
          (elem.parentNode as HTMLElement).classList.add('finished');
        }
      });
    }
  }
}
