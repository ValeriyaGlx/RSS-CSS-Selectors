import './main.css';
import View from '../view';
import { IElementCreator } from '../../../interfaces/interfaces';
import ElementCreator from '../../utils/element-creator';
import CSSContainer from './code-containers/css-container/css-container';
import HTMLContainer from './code-containers/html-container/html-container';
import data from '../../../data/data';
import SettingsPanel from './settings-panel/settingsPanel';
import { finishedModal } from '../../utils/constants';
import openLevels from '../../usability/levels';

const cssClases = {
  MAIN: 'main',
  H1: 'main-header',
  LAYOUT_EXAMPLE: 'main-layout',
  CODE: 'code',
  BGRND: 'background',
  RESULT_BLOCK: 'result-block',
  FINISH: 'finish',
  HIDDEN: 'hidden',
};

export default class MainView extends View {
  constructor() {
    const params: IElementCreator = {
      tag: 'main',
      className: [cssClases.MAIN],
    };
    super(params);
  }

  public configureView(): void {
    const params: IElementCreator = {
      tag: 'h1',
      className: [cssClases.H1],
      textContent: data[0].title,
    };
    const h1 = new ElementCreator(params);
    this.elementCreator.addInnerElement(h1);
    const paramsExample: IElementCreator = {
      tag: 'div',
      className: [cssClases.LAYOUT_EXAMPLE],
    };
    const layoutExamle = new ElementCreator(paramsExample);
    this.elementCreator.addInnerElement(layoutExamle);

    const paramsResultBlock: IElementCreator = {
      tag: 'div',
      className: [cssClases.RESULT_BLOCK],
      attr: [{ name: 'id', propery: 'resultBlock' }],
    };

    const resultBlock = new ElementCreator(paramsResultBlock);
    layoutExamle.addInnerElement(resultBlock);

    const paramsCode: IElementCreator = {
      tag: 'div',
      className: [cssClases.CODE],
      attr: [{ name: 'data-testid', propery: 'code' }],
    };

    const code = new ElementCreator(paramsCode);
    this.elementCreator.addInnerElement(code);

    code.addInnerElement(new CSSContainer().getHTMLElement());
    code.addInnerElement(new HTMLContainer().getHTMLElement());

    const paramsBackground: IElementCreator = {
      tag: 'div',
      className: [cssClases.BGRND],
    };
    this.elementCreator.addInnerElement(new ElementCreator(paramsBackground));

    this.elementCreator.addInnerElement(new SettingsPanel().getHTMLElement());

    const paramsFinish: IElementCreator = {
      tag: 'div',
      className: [cssClases.FINISH, cssClases.HIDDEN],
    };
    this.elementCreator.addInnerElement(new ElementCreator(paramsFinish));
  }
}

function addChildren(): void {
  (document.querySelector('.finish') as HTMLElement).innerHTML = finishedModal;
  document.querySelector('.choose-level')?.addEventListener('click', openLevels);
}
document.addEventListener('DOMContentLoaded', addChildren);
