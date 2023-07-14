const div = document.createElement('div');
div.setAttribute('class', 'selector-data');

document.addEventListener('DOMContentLoaded', () => document.querySelector('.main-layout')?.appendChild(div));
export function addSelectorData(targetSelector: Element, node: Element): void {
  if (!targetSelector) return;
  div.style.display = 'block';
  let styles = '';
  let tagName = '';
  if (node.textContent) {
    if (node.tagName === 'SPAN') {
      if (node.parentElement?.children[0]) {
        tagName = ((node.parentElement?.children[0] as HTMLElement).textContent as string).replace(/[^\w\s]|_/g, '');
      } else {
        tagName = node.textContent;
      }
    } else {
      tagName = node.textContent
        .split(' ')
        .filter((el) => el !== '\n')
        .filter((el) => el !== '')[0]
        .replace(/[^\w\s]|_/g, '')
        .trim() as string;
    }
  }

  if (node.tagName === 'DIV') {
    if ([...node.children][1] && [...node.children][1].classList.contains('html-class')) {
      styles += ` class="${[...node.children][2].textContent}"`;
    }
    if ([...node.children][1] && [...node.children][1].classList.contains('html-id')) {
      styles += ` id="${[...node.children][2].textContent}"`;
    }
    if ([...node.children][3] && [...node.children][3].classList.contains('html-attr')) {
      styles += ` name="${[...node.children][4].textContent}"`;
    }
  }

  if (node.tagName === 'SPAN') {
    if (node.parentNode?.children[1] && node.parentNode?.children[1].classList.contains('html-class')) {
      styles += ` class="${node.parentNode?.children[2].textContent}"`;
    }
    if (node.parentNode?.children[1] && node.parentNode?.children[1].classList.contains('html-id')) {
      styles += ` id="${node.parentNode?.children[2].textContent}"`;
    }
    if (node.parentNode?.children[3] && node.parentNode?.children[3].classList.contains('html-attr')) {
      styles += ` name="${node.parentNode?.children[4].textContent}"`;
    }
  }
  const coordinats = targetSelector.getBoundingClientRect();
  div.style.top = `${coordinats.top - 30}px`;
  div.style.left = `${coordinats.left - 20}px`;
  div.textContent = `<${tagName}${styles}></${tagName}>`;
}

export function removeSelector(): void {
  div.style.display = 'none';
  document.querySelectorAll('.forest *').forEach((el) => {
    el.classList.remove('hovered');
  });
}
