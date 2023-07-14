import { IElementCreator } from '../../interfaces/interfaces';

export default class ElementCreator {
  public element: HTMLElement | null;

  constructor(param: IElementCreator) {
    this.element = null;
    this.createElement(param);
  }

  private createElement(param: IElementCreator): void {
    this.element = document.createElement(param.tag);
    this.setSccClasses(param.className);
    if (param.textContent) {
      this.setTextContent(param.textContent);
    }
    if (param.callback) {
      this.setCallback(param.callback);
    }
    if (param.attr) {
      this.setAttrubite(param.attr);
    }
  }

  public addInnerElement(element: HTMLElement | ElementCreator): void {
    if (element instanceof ElementCreator) {
      this.element?.append(element.getElement() as HTMLElement);
    } else {
      this.element?.append(element);
    }
  }

  public getElement(): HTMLElement | null {
    return this.element;
  }

  private setSccClasses(cssClasses: string[]): void {
    cssClasses.forEach((className) => this.element?.classList.add(className));
  }

  private setTextContent(text: string): void {
    if (this.element) {
      this.element.textContent = text;
    }
  }

  private setCallback(callback: null | ((event?: Event) => void)): void {
    if (callback) {
      this.element?.addEventListener('click', (event) => callback(event));
    }
  }

  private setAttrubite(attrs: Array<{ name: string; propery: string }>): void {
    if (attrs) {
      attrs.forEach((el) => {
        this.element?.setAttribute(el.name, el.propery);
      });
    }
  }
}
