import '../view/main/code-containers/html-container/html-container.css';
import { addSelectorData, removeSelector } from './selectors';

function findElementIntoGame(e: Event): Element | undefined {
  e.stopPropagation();
  const node = (e.target as HTMLElement).parentNode;
  let elementsArray;
  let indexOfElement;
  let gameElement;

  if ((node as HTMLElement).classList.contains('forest-html')) {
    elementsArray = [...(node as HTMLElement).children];
    indexOfElement = elementsArray.filter((el) => el.tagName === 'DIV').indexOf(e.target as HTMLElement);
    gameElement = document.querySelectorAll('.forest > *')[indexOfElement];
    return gameElement;
  }

  if (!(e.target as HTMLElement).classList.contains('inside') && !(node as HTMLElement).classList.contains('inside')) {
    elementsArray = [...((node as HTMLElement).parentNode as HTMLElement).children];
    indexOfElement = elementsArray
      .filter((el) => el.tagName === 'DIV')
      .indexOf((e.target as HTMLElement).parentNode as HTMLElement);
    gameElement = document.querySelectorAll('.forest > *')[indexOfElement];
  } else {
    const allElements = [...document.querySelectorAll('.forest-html > *')].filter((el) => el.tagName === 'DIV');
    const indexOfContainer = allElements.indexOf((node as HTMLElement).parentNode as HTMLElement);
    if (allElements[indexOfContainer]) {
      indexOfElement = [...allElements[indexOfContainer].children]
        .filter((el) => el.tagName === 'DIV')
        .indexOf((e.target as HTMLElement).parentNode as HTMLElement);
      gameElement = document.querySelectorAll('.forest > *')[indexOfContainer].children[indexOfElement];
    }
  }
  return gameElement;
}

export default function mouseMoveInsideCode(e: Event): void {
  const foundedElement = findElementIntoGame(e);

  if (
    (e.target as HTMLElement).classList.contains('html-section-field') ||
    (e.target as HTMLElement).classList.contains('forest-html')
  ) {
    document.querySelectorAll('.forest-html div').forEach((el) => {
      el.classList.remove('hovered');
    });
    document.querySelectorAll('.forest *').forEach((el) => {
      el.classList.remove('hovered');
    });
    removeSelector();
    return;
  }

  document.querySelectorAll('.forest-html div').forEach((el) => {
    el.classList.remove('hovered');
  });
  document.querySelectorAll('.forest *').forEach((el) => {
    el.classList.remove('hovered');
  });

  if (e.target instanceof HTMLDivElement) {
    (e.target as HTMLElement).classList.add('hovered');
    if (foundedElement) {
      foundedElement.classList.add('hovered');
    }
  }

  if ((e.target as HTMLElement).classList.contains('for-hover')) {
    (e.target as HTMLElement).parentElement?.classList.add('hovered');
    if (foundedElement) {
      foundedElement.classList.add('hovered');
    }
  }

  addSelectorData(foundedElement as HTMLElement, e.target as HTMLElement);
}

function findElementIntoCode(e: Event): Element | void {
  e.stopPropagation();
  const node = (e.target as HTMLElement).parentNode;
  let elementsArray;
  let indexOfElement;
  let codeElement;

  if ((node as HTMLElement).classList.contains('forest')) {
    elementsArray = [...(node as HTMLElement).children];
    indexOfElement = elementsArray.indexOf(e.target as HTMLElement);
    codeElement = [...document.querySelectorAll('.forest-html > *')].filter((el) => el.tagName === 'DIV')[
      indexOfElement
    ];
  } else {
    const allElements = [...document.querySelectorAll('.forest > *')];
    const indexOfContainer = allElements.indexOf(node as HTMLElement);
    indexOfElement = [...(node as HTMLElement).children].indexOf(e.target as HTMLElement);
    if (indexOfContainer !== -1) {
      const codeContainer = [...document.querySelectorAll('.forest-html > *')].filter((el) => el.tagName === 'DIV')[
        indexOfContainer
      ];
      codeElement = [...codeContainer.children].filter((el) => el.tagName === 'DIV')[indexOfElement];
    }
  }

  return codeElement;
}

export function mouseMoveInsideGame(e: Event): void {
  const foundedElement = findElementIntoCode(e);

  if (
    (e.target as HTMLElement).classList.contains('forest') ||
    (e.target as HTMLElement).classList.contains('result-block')
  ) {
    document.querySelectorAll('.forest *').forEach((el) => {
      el.classList.remove('hovered');
    });
    document.querySelectorAll('.forest-html *').forEach((el) => {
      el.classList.remove('hovered');
    });
    removeSelector();
    return;
  }

  [...document.querySelectorAll('.forest *')].forEach((el) => {
    if (el.classList.contains('hovered')) {
      el.classList.remove('hovered');
    }
  });

  [...document.querySelectorAll('.forest-html *')].forEach((el) => {
    if (el.classList.contains('hovered')) {
      el.classList.remove('hovered');
    }
  });

  if (e.target instanceof HTMLElement) {
    (e.target as HTMLElement).classList.add('hovered');
    if (foundedElement) {
      foundedElement.classList.add('hovered');
    }
  }
  addSelectorData(e.target as HTMLElement, foundedElement as HTMLElement);
}
