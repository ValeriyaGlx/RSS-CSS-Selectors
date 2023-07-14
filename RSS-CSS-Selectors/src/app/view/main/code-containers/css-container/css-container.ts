import './css-container.css';
import { IElementCreator } from '../../../../../interfaces/interfaces';
import View from '../../../view';
import CodeContainer from '../code-container';
import data from '../../../../../data/data';
import addCodeMirrorInterface from '../../../../utils/code-creator';
import ElementCreator from '../../../../utils/element-creator';
import { cssSectionContent } from '../../../../utils/constants';

const cssClases = {
  MAIN: 'css-viewer',
  INNER: 'css-viewer-inner',
  INNER_CHILD: 'css-viewer-inner_div',
  SECTION: 'css-viewer-section',
  NUMBERS: 'css-section-numbers',
  FIELD: 'css-section-field',
};

const textareaAttributes = [
  {
    name: 'id',
    propery: 'html-editor',
  },
];

const innerSpans = ['CSS Editor', 'style.css'];
const viewerChildren = [cssClases.NUMBERS, cssClases.FIELD];

export default class CSSContainer extends View {
  private addCodeMirrorInterface: void;

  constructor() {
    const params: IElementCreator = {
      tag: 'div',
      className: [cssClases.MAIN],
    };
    super(params);
    this.addCodeMirrorInterface = addCodeMirrorInterface();
  }

  public configureView(): void {
    const params = {
      tag: 'div',
      className: [cssClases.INNER],
    };
    const children = new CodeContainer(this.elementCreator);
    children.addInnerElements(params, innerSpans);

    const paramsSection = {
      tag: 'div',
      className: [cssClases.SECTION],
    };

    const paramsTextarea: IElementCreator = {
      tag: 'textarea',
      className: [cssClases.MAIN],
      textContent: data[0].codeFragment,
      attr: textareaAttributes,
    };
    const cssViewSection = new ElementCreator(paramsSection);
    this.elementCreator.addInnerElement(cssViewSection);

    const codemirrorSection = new ElementCreator(paramsTextarea);
    cssViewSection.addInnerElement(codemirrorSection);

    viewerChildren.forEach((el) => {
      const paramsSectionChild: IElementCreator = {
        tag: 'div',
        className: [el],
      };
      const sectionChildren = new ElementCreator(paramsSectionChild);
      cssViewSection.addInnerElement(sectionChildren);

      if ((sectionChildren.element as HTMLElement).className === 'css-section-numbers') {
        (sectionChildren.element as HTMLElement).innerHTML = '';
      } else {
        (sectionChildren.element as HTMLElement).innerHTML = cssSectionContent;
      }
    });
  }
}
