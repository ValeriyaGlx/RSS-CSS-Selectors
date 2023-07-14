import { IElementCreator } from '../../../../interfaces/interfaces';
import ElementCreator from '../../../utils/element-creator';

export default class CodeContainer {
  public element: ElementCreator;

  constructor(element: ElementCreator) {
    this.element = element;
  }

  public addInnerElements(params: IElementCreator, spans: string[]): void {
    const elementParams: IElementCreator = {
      tag: params.tag,
      className: params.className,
    };

    const inner = new ElementCreator(elementParams);
    if (inner instanceof ElementCreator) {
      this.element.addInnerElement(inner);
    }

    spans.forEach((el) => {
      const paramsSpan: IElementCreator = {
        tag: params.tag,
        className: params.className,
        textContent: el,
      };
      const span = new ElementCreator(paramsSpan);
      inner.addInnerElement(span);
    });
  }

  public addCodeElements(params: IElementCreator, paramsText: IElementCreator): void {
    const elementParams: IElementCreator = {
      tag: params.tag,
      className: params.className,
    };

    const inner = new ElementCreator(elementParams);
    if (inner instanceof ElementCreator) {
      this.element.addInnerElement(inner);
    }

    const paramsTextarea = {
      tag: paramsText.tag,
      className: paramsText.className,
      textContent: paramsText.textContent,
      attr: paramsText.attr,
    };

    const textarea = new ElementCreator(paramsTextarea);
    inner.addInnerElement(textarea);
  }
}
