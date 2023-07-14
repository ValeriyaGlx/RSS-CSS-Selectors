import { checkedLevels } from '../utils/constants';

export function getInputValue(e: Event): void {
  const input = e.target as HTMLInputElement;
  if (input.value === '') {
    input.classList.add('blink');
  } else {
    input.classList.remove('blink');
  }
}

export default function addStyleToCheckLevel(level: number): boolean[] {
  const targetLevel = document.querySelectorAll('.level-button_div')[level];
  checkedLevels[level] = true;
  (targetLevel.children[0] as HTMLElement).style.filter = 'sepia(0)';
  (targetLevel.children[0] as HTMLElement).classList.add('not-filter');
  (targetLevel as HTMLElement).classList.add('finished');
  return checkedLevels;
}

export function checkCompliteGame(): void {
  const levels = document.querySelectorAll('.level-button_div');
  if ([...levels].every((el) => el.classList.contains('finished'))) {
    document.querySelector('.background')?.classList.add('background-active-finish');
    document.querySelector('.finish')?.classList.remove('hidden');
    document.querySelector('.finish')?.classList.add('dance');
  }
}

export function findUnfinishedLevel(): number {
  const levels = document.querySelectorAll('.level-button_div');
  const notComplite = [...levels].find((el) => !el.classList.contains('finished'));

  let firstUnshinishedLevel: number = [...levels].indexOf(notComplite as HTMLElement);
  if (!notComplite) {
    firstUnshinishedLevel = 0;
    document.querySelector('.finish')?.classList.remove('hidden');
    document.querySelector('.finish')?.classList.add('dance');
  }
  return firstUnshinishedLevel;
}
