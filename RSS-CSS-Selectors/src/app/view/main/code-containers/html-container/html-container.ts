import './html-container.css';
import { IElementCreator } from '../../../../../interfaces/interfaces';
import View from '../../../view';
import CodeContainer from '../code-container';
import ElementCreator from '../../../../utils/element-creator';
import { htmlSectionContent } from '../../../../utils/constants';

const cssClases = {
  MAIN: 'html-viewer',
  INNER: 'html-viewer-inner',
  SECTION: 'html-viewer-section',
  NUMBERS: 'html-section-numbers',
  FIELD: 'html-section-field',
};

const innerSpans = ['HTML Viewer', 'forest.html'];
const viewerChildren = [cssClases.NUMBERS, cssClases.FIELD];

export default class HTMLContainer extends View {
  constructor() {
    const params: IElementCreator = {
      tag: 'div',
      className: [cssClases.MAIN],
    };
    super(params);
  }

  public configureView(): void {
    const params: IElementCreator = {
      tag: 'div',
      className: [cssClases.INNER],
    };
    const children = new CodeContainer(this.elementCreator);
    children.addInnerElements(params, innerSpans);

    const paramsHtmlViewSection: IElementCreator = {
      tag: 'div',
      className: [cssClases.SECTION],
    };

    const htmlViewSection = new ElementCreator(paramsHtmlViewSection);
    this.elementCreator.addInnerElement(htmlViewSection);

    viewerChildren.forEach((el) => {
      const paramsSectionChild: IElementCreator = {
        tag: 'div',
        className: [el],
      };
      const sectionChildren = new ElementCreator(paramsSectionChild);
      htmlViewSection.addInnerElement(sectionChildren);

      if ((sectionChildren.element as HTMLElement).className === 'html-section-numbers') {
        (sectionChildren.element as HTMLElement).innerHTML = '';
      } else {
        (sectionChildren.element as HTMLElement).innerHTML = htmlSectionContent;
      }
    });
  }
}
