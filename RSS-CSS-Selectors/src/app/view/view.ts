import { IElementCreator } from '../../interfaces/interfaces';
import ElementCreator from '../utils/element-creator';

export default abstract class View {
  public elementCreator: ElementCreator;

  constructor(params: IElementCreator) {
    this.elementCreator = this.createView(params);
    this.configureView();
  }

  public getHTMLElement(): HTMLElement {
    return this.elementCreator.getElement() as HTMLElement;
  }

  private createView(params: IElementCreator): ElementCreator {
    const elementParams = {
      tag: params.tag,
      className: params.className,
      textContent: params.textContent,
      callback: params.callback,
      attr: params.attr,
    };

    const element = new ElementCreator(elementParams);

    return element;
  }

  public abstract configureView(): void;
}
