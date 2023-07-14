import data from '../../data/data';

function addLevels(): void {
  (document.querySelector('.levels-list') as HTMLElement).textContent = '';
  for (let i = 1; i <= data.length; i += 1) {
    const button = document.createElement('div');
    const div = document.createElement('div');

    button.setAttribute('id', `${i}`);
    button.setAttribute('class', 'level-button');

    div.setAttribute('class', 'level-button_div');
    button.innerHTML = `${i}. ${data[i - 1].levelName}`;
    document.querySelector('.levels-list')?.appendChild(button);
    button.appendChild(div);
    div.appendChild(document.createElement('span'));
    div.appendChild(document.createElement('span'));
  }
}

export function getLinesAmount(): void {
  const divHeight = (document.querySelector('.forest-html') as HTMLElement).clientHeight;
  const lineHeight = 23.2;
  const linesAmount = Math.floor(divHeight / lineHeight);

  (document.querySelector('.html-section-numbers') as HTMLElement).innerHTML = '';
  (document.querySelector('.css-section-numbers') as HTMLElement).innerHTML = '';
  for (let i = 1; i <= linesAmount; i += 1) {
    (document.querySelector('.html-section-numbers') as HTMLElement).innerHTML += `${i}</br>`;
    (document.querySelector('.css-section-numbers') as HTMLElement).innerHTML += `${i}</br>`;
  }
}

document.addEventListener('DOMContentLoaded', getLinesAmount);

export const settingsLayout = `<div class=settings-header>
<div class="settings-header_inner">
<h2 data-level='0'>Level 1 of 20</h2>
<div class="level-checker"></div>
<div class="level-eye"></div>
</div>
<div class="level-navigation">
  <button class="level-navigation-prev"></button>
  <button class="level-navigation-next" data-testid="next-lvl"></button>
</div>
</div>

<div class="settings-description">
<h4>Type Selector</h4>
<p class="description-level">Select elements by their type</p>
<div>
<span class="tag">A</span>
</div>
<p class="description-level">Selects all elements of type A. Type refers to the type of tag, so  <span class="tag">div</span>,  <span class="tag">p</span> and  <span class="tag">ul</span> are all different element types.</p>
<h4>Examples:</h4>
<div class="description-examples">
<div class="example">div selects all &ltdiv&gt elements.</div>
<div class="example">div selects all &ltdiv&gt elements.</div>
</div>
</div>
<div class="help">
</div>
<div class="levels-list">
${document.addEventListener('DOMContentLoaded', addLevels)}
</div>

<div class="settings-choose">
<button class="choose choose-level" data-testid="choose-level">Choose level</button>
<button class="choose choose-help">Help</button>
<button class="choose choose-reset hidden">Reset Progress</button>
</div>
`;

export const htmlSectionContent = `<div class="forest-html">
${data[0].htmlFragment}
</div>
`;

export const cssSectionContent = `<div class="css-section-answer">
<input class="css-section_input blink" data-testid="input" placeholder="Type a css selector" value="" autofocus />
<div class="css-section_button">enter</div>
</div>`;

export const checkedLevels: boolean[] = Array(20).fill(false);
export const checkedAnswers: boolean[] = Array(20).fill(false);

export const finishedModal = `
<h4>Horray! You done it!</h4>
<p>You've learn all selectors!</p>
<button>Start again!</button>
`;
