import data from '../../data/data';
import addCodeMirrorInterface from '../utils/code-creator';
import { checkedAnswers, getLinesAmount } from '../utils/constants';
import addStyleToCheckLevel, { checkCompliteGame, findUnfinishedLevel } from './input-usability';
import openSettings from './open-settings';

export default function openLevels(): void {
  const button = document.querySelector('.choose-level') as HTMLElement;
  if (button.textContent === 'Choose level') {
    button.textContent = 'Show description';
  } else {
    button.textContent = 'Choose level';
  }
  (document.querySelector('.levels-list') as HTMLElement).classList.toggle('active');
  (document.querySelector('.settings-description') as HTMLElement).classList.toggle('active');
  (document.querySelector('.choose-help') as HTMLElement).classList.toggle('hidden');
  (document.querySelector('.choose-reset') as HTMLElement).classList.toggle('hidden');
}

let level = 0;

export function renderLevel(lvl: number): number {
  (document.querySelector('.css-section_input') as HTMLInputElement).classList.add('blink');
  document.querySelectorAll('.forest-html div').forEach((el) => {
    el.classList.remove('hovered');
  });
  (document.querySelector('.css-section_input') as HTMLInputElement).value = '';
  (document.getElementById('html-editor') as HTMLTextAreaElement).textContent = data[lvl].codeFragment;
  addCodeMirrorInterface();

  (document.querySelector('.forest-html') as HTMLElement).innerHTML = data[lvl]?.htmlFragment;
  (document.querySelector('.main-header') as HTMLElement).textContent = data[lvl]?.title;

  (document.querySelector('.settings-header_inner h2') as HTMLElement).textContent = `Level ${lvl + 1} of 20`;
  (document.querySelector('.settings-header_inner h2') as HTMLElement).setAttribute('data-level', String(lvl));
  const descriptionLevel: Element[] = [...document.querySelectorAll('.settings-description > *')];
  descriptionLevel.length = 4;
  const descriptionData = [
    data[lvl].description.title,
    data[lvl].description.task,
    data[lvl].description.tag,
    data[lvl].description.description,
  ];
  descriptionLevel.forEach((el) => {
    const element = el;
    (element as HTMLElement).innerHTML = descriptionData[descriptionLevel.indexOf(el)];
  });

  const examples = [...document.querySelectorAll('.example')];

  examples.forEach((el) => {
    const element = el;
    (element as HTMLElement).textContent = data[lvl].description.examples[examples.indexOf(el)];
  });

  const targetLevelEye = document.querySelectorAll('.level-button_div span:last-child')[lvl] as HTMLElement;
  const targetLevelMark = document.querySelectorAll('.level-button_div span:first-child')[lvl] as HTMLElement;
  if (targetLevelEye.classList.contains('not-filter')) {
    (document.querySelector('.level-eye') as HTMLElement).style.filter = 'sepia(0)';
  } else {
    (document.querySelector('.level-eye') as HTMLElement).style.filter = 'sepia(1)';
  }

  if (targetLevelMark.classList.contains('not-filter')) {
    (document.querySelector('.level-checker') as HTMLElement).style.filter = 'sepia(0)';
  } else {
    (document.querySelector('.level-checker') as HTMLElement).style.filter = 'sepia(1)';
  }
  getLinesAmount();
  return lvl;
}

export function chooseLevel(e: Event): void {
  level = Number((e.target as HTMLElement).id) - 1;
  renderLevel(level);
  openLevels();
}

export function switchPrevLevel(): number {
  if (level === 0) return 0;
  level -= 1;
  renderLevel(level);
  return level;
}

export function switchNextLevel(): number {
  if (level === data.length - 1) return data.length - 1;
  level += 1;
  renderLevel(level);
  return level;
}

function addStyleToCheckAnwser(): boolean[] {
  const targetLevel = document.querySelectorAll('.level-button_div')[level];
  checkedAnswers[level] = true;
  (targetLevel.children[1] as HTMLElement).style.filter = 'sepia(0)';
  (targetLevel.children[1] as HTMLElement).classList.add('not-filter');
  return checkedAnswers;
}

export function getHelp(): void {
  const lvl = document.querySelector('.settings-header_inner h2')?.getAttribute('data-level') as string;
  const rightAnwser = data[+lvl].rightAnwser[0];
  const input = document.querySelector('.css-section_input') as HTMLInputElement;
  input.classList.remove('blink');
  let out = '';
  let count = 0;

  function typeText(): void {
    const interval = setTimeout(() => {
      out += rightAnwser[count];
      input.value = out;
      count += 1;

      if (count >= rightAnwser.length) {
        clearTimeout(interval);
        return;
      }

      typeText();
    }, 200);
  }

  typeText();
  openSettings();
  addStyleToCheckAnwser();
}

function getLocalStorage(): void {
  if (localStorage.getItem('levelId')) {
    level = Number(localStorage.getItem('levelId') as string);
    renderLevel(level);
  } else {
    level = 0;
  }
}
window.addEventListener('load', getLocalStorage);

export function clearLocalStorage(): void {
  localStorage.removeItem('checkedAnswers');
  localStorage.removeItem('checkedLevels');
  document.querySelectorAll('.level-button_div').forEach((el) => el.classList.remove('finished'));
  document.querySelectorAll('.level-button_div span').forEach((el) => el.classList.remove('not-filter'));
  document.querySelectorAll('.level-button_div span').forEach((el) => {
    const elem = el;
    (elem as HTMLElement).style.filter = 'sepia(1)';
  });
}

export function newGame(): void {
  document.querySelectorAll('.level-button_div').forEach((el) => el.classList.remove('finished'));
  document.querySelector('.background')?.classList.remove('background-active-finish');
  document.querySelector('.finish')?.classList.add('hidden');
  document.querySelector('.finish')?.classList.remove('dance');
  clearLocalStorage();
  renderLevel(0);
}

export function checkAnwser(): number {
  const levelT = document.querySelector('.settings-header_inner h2')?.getAttribute('data-level') as string;
  const input = (document.querySelector('.css-section_input') as HTMLInputElement).value.trim();
  const forest = document.querySelector('.forest') as HTMLInputElement;

  try {
    forest.querySelectorAll(`${input}`);
  } catch (e) {
    document.querySelector('.code')?.classList.add('shake');
    setTimeout(() => {
      document.querySelector('.code')?.classList.remove('shake');
    }, 500);
    return +levelT;
  }

  const isDance = [...forest.querySelectorAll(`${input}`)].every((el) => el.classList.contains('dance'));

  if (forest.querySelectorAll(`${input}`) && forest.querySelectorAll(`${input}`).length !== 0 && isDance) {
    document.querySelectorAll('.dance').forEach((el) => {
      el.classList.add('reduction');
    });

    if (Number(levelT) === 19) {
      const unfinishedLevel = findUnfinishedLevel();
      setTimeout(() => {
        renderLevel(unfinishedLevel);
      }, 700);
    } else {
      setTimeout(() => {
        renderLevel(Number(levelT) + 1);
      }, 700);
    }
    const currentLevel = Number(levelT);
    addStyleToCheckLevel(currentLevel);
  } else {
    document.querySelector('.code')?.classList.add('shake');
    setTimeout(() => {
      document.querySelector('.code')?.classList.remove('shake');
    }, 500);
  }
  setTimeout(checkCompliteGame, 500);
  level = +levelT + 1;
  return level;
}
